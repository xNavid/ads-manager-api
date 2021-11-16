const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
    },
    valid_until: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
