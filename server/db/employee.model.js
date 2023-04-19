const { Schema, model } = require("mongoose");

module.exports = model(
  "Employee",
  new Schema({
    name: String,
    level: String,
    position: String,
    created: {
      type: Date,
      default: Date.now,
    },
  })
);
