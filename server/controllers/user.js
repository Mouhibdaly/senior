const { User } = require("../models/user.js");

module.exports.getAllUsers = async function (req, res) {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.getOneUser = async function (req, res) {
  try {
    const oneUser = await User.findOne({
      title: req.params.title,
    });
    if (oneUser) {
      res.status(200).send(oneUser);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.addUser = async function (req, res) {
  try {
    const { title, comments, like, description } = req.body;
    const newUser = new User({ title, comments, like, description });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteUser = async function (req, res) {
  try {
    const removedUser = await User.deleteOne({
      title: req.params.title,
    });
    res.status(204).send(removedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateUser = async function (req, res) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true }
    );
      res.status(200).send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
