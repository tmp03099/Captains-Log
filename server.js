require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");

// create app
const app = express();
const port = 3000;

// Config views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//setting a middleware to run in our app
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
//parses the data fromt the request
app.use(express.urlencoded({ extended: false }));

//* Default route
app.get("/", (req, res) => {
  res.send("<h1>Captains Log</h1>");
});

app.get("/logs/new", (req, res) => {
  res.render("captains/New");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
  connectToDB();
});
