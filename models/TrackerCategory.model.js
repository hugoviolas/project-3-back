const { Schema, model } = require("mongoose");

const trackerCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const TrackerCategory = model("TrackerCategory", trackerCategorySchema);

module.exports = TrackerCategory;
