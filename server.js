// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["secretKey"],
  })
);

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const passwordRoutes = require('./routes/passwords');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/users", usersRoutes(db));
app.use("/passwords", passwordRoutes(db)); // this one return HTML
// app.use('/api/passwords', passwordApiRoutes(db)); // this one return json
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  //Added to easily render page. Will fix/move before submission
  res.render("login");
});

app.post("/login", (req, res) => {
  const userId = req.body.username;
  const orgId = req.body.password;
  if (!userId || !orgId) {
    return res.status(403).send("Email and Password cannot be blank.");
  } else {
    req.session.userId = userId;
    req.session.orgId = orgId;
    res.redirect("/passwords");
  }
});

app.get("/register", (req, res) => {
  //Added to easily render page. Will fix/move before submission
  res.render("register");
});
// Separate them into separate routes files (see above).

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
