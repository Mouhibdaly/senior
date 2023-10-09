const { connection } = require("../database/db.js");
const mongoose = require("mongoose");

const schema = new connection({
  name: {
    type: String,
  },
});

const User = mongoose.model("folowers", schema);

module.exports.followers = followers;
