const mongoose = require("mongoose");

//create schema
const logSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
    shiplsBroken: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
