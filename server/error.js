module.exports.handleError = (err, res) => {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  };