const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  policeStation: String,
  role: String,
});

module.exports = mongoose.model("User", userSchema);
