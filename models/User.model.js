const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    userName: {
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
      enum: ["female", "male", "non-binary/gender fluid", "other"],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
