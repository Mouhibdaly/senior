const mongoose = require("mongoose");
const connection = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => {
    console.log("base connected !");
  })
  .catch(() => {
    throw error;
  });

module.exports.connection = connection;
