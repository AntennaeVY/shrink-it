const mongoose = require("mongoose");

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("DB connnected successfuly");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
