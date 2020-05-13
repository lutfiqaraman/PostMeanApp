require("dotenv").config({ path: "../config/.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoedb = require("./db/dbconn");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoedb.connection();
require("./routes/post.route")(app);

module.exports = app;
