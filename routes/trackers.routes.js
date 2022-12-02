const router = require("express").Router();
const isAuthenticated = require("../middlewares/jwt.middleware");
const protectRoute = require("../middlewares/protectRoute");
const Tracker = require("./../models/Tracker.model");
const TrackerCategory = require("./../models/TrackerCategory.model");
const TrackerSubCategory = require("./../models/TrackerSubCategory.model");

router.get("/", async (req, res, next) => {
  try {
    const allTrackers = await Tracker.find();
    const allTrackersCategory = await TrackerCategory.find();
    const allTrackersSubCategory = await TrackerSubCategory.find();
    res
      .status(200)
      .json({ allTrackers, allTrackersCategory, allTrackersSubCategory });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
