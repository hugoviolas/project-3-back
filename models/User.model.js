const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["female", "male", "nb-gf", "other"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
