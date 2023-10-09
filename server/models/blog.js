const { connection } = require("../database/db.js");
const mongoose = require("mongoose");

const schema = new connection({
  image : String,
  title: {
    type: String,
  },
  comments: String,
  like: Number,
  description: String,
});

const Blog = mongoose.model("Blog", schema);

module.exports.Blog = Blog;
