require("dotenv").config({ path: "../config/.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to database
const mongodb = require("./db/dbconn");
mongodb.connection();

// Posts - route
const postsRouter = require("./routes/post.route");
app.use(postsRouter);

module.exports = app;
