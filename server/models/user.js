const { connection } = require("../database/db.js");
const mongoose = require("mongoose");

const schema = new connection({
  name: {
    type: String,
  },
  email : String,
  password: String,
  image: String,
});

const User = mongoose.model("User", schema);

module.exports.User = User;
