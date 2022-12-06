const { Schema, model } = require("mongoose");

const phaseSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },
  img: {
    type: String,
    required: true,
  },
});

const Phase = model("Phase", phaseSchema);
module.exports = Phase;
