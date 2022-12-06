require("dotenv").config();
require("../config/dbConfig");
const Tracker = require("../models/Tracker.model");
const trackers = require("./trackers.json");
const TrackerCategory = require("../models/TrackerCategory.model");
const trackerCategories = require("./trackerCategories.json");
const TrackerSubCategory = require("../models/TrackerSubCategory.model");
const trackerSubCategories = require("./trackerSubcategories.json");
const Phase = require("./../models/Phase.model");
const phases = require("./phases.json");

const mongoose = require("mongoose");

// Seed phases function
const phasesSeed = async () => {
  await Phase.deleteMany();
  await Phase.create(phases);
};

// Seed categories function
const trackerCategorySeed = async () => {
  await TrackerCategory.deleteMany();
  await TrackerCategory.create(trackerCategories);
};

// Seed subcategories function
const trackerSubCategorySeed = async () => {
  await trackerCategorySeed(); // Call category seed, needed to create ref with subcategories
  await TrackerSubCategory.deleteMany();
  for (const subCat of trackerSubCategories) {
    const cat = await TrackerCategory.findOne({ name: subCat.category });
    subCat.category = cat._id;
    await TrackerSubCategory.create(subCat);
  }
};

// Seed trackers function
const trackersSeed = async () => {
  await trackerSubCategorySeed(); // Call subcategory seed, needed to create ref with trackers
  await Tracker.deleteMany();
  for (const tracker of trackers) {
    const subCat = await TrackerSubCategory.findOne({
      name: tracker.subcategory,
    });
    tracker.subcategory = subCat._id;
    await Tracker.create(tracker);
  }
  mongoose.disconnect();
};

// Seed everything !
trackersSeed();
phasesSeed();
