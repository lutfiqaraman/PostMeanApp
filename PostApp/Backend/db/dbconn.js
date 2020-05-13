const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/.env" });

const username = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;

exports.connection = () => {
  mongoose
    .connect(
      `mongodb+srv://${username}:${password}@cluster0-eqore.mongodb.net/postdb?retryWrites=true&w=majority`,
      {
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
