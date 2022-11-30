const { Schema, model } = require("mongoose");

const treatmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "TreatmentCategory",
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Treatment = model("Treatment", treatmentSchema);

module.exports = Treatment;
