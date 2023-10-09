const { Blog } = require("../models/blog.js");

module.exports.createOne = async (req, res) => {
  try {
    const result = await Blog.create(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.retrieve = async (req, res) => {
  try {
    const result = await Blog.find({});
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.retrieveOne = async (req, res) => {
  try {
    const result = await Blog.findById(req.params.title );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(404).send("Not Found");
  }
};

module.exports.updateOne = async (req, res) => {
  try {
    const result = await Blog.findOneAndUpdate(
      { _id: req.params.id }, 
      req.body,
      { new: true } 
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteOne = async (req, res) => {
  try {
    const result = await Blog.findOneAndDelete({ _id: req.params.id });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
