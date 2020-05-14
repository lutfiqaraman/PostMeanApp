require("dotenv").config({ path: "../config/.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Connect to database
const mongodb = require("./db/dbconn");
mongodb.connection();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require("./routes/post.route")(app);

module.exports = app;
