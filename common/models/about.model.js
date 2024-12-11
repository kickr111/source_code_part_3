const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const About = mongoose.model("About", aboutSchema);

module.exports = About;
