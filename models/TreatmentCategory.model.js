const { Schema, model } = require("mongoose");

const treatmentCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
});

const TreatmentCategory = model("TreatmentCategory", treatmentCategorySchema);

module.exports = TreatmentCategory;
