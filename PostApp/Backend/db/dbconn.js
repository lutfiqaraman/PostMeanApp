require("dotenv").config();

const mongoose = require("mongoose");
const username = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;

exports.connection = () => {
  mongoose
    .connect(
      `mongodb+srv://${username}:${password}@cluster0-eqore.mongodb.net/`,
      {
        dbName: "postDB",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to database ...");
    })
    .catch((err) => {
      if (err) throw err;
    });
};
