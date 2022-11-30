const { Schema, model } = require("mongoose");

const trackerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

const Tracker = model("Tracker", trackerSchema);

module.exports = Tracker;
