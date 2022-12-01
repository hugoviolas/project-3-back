const { Schema, model } = require("mongoose");

const trackerSubCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  picture: {
    type: String,
  },
});

const TrackerSubCategory = model(
  "TrackerSubCategory",
  trackerSubCategorySchema
);
module.exports = TrackerSubCategory;
