require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");

//import models
const Log = require("./models/Log");

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

//* New route
app.get("/logs/new", (req, res) => {
  res.render("captains/New");
});

//* Create route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  Log.create(req.body, (error, createdLog) => {
    // res.send(createdLog);
    res.redirect(`/logs/${createdLog._id}`);
  });
});

//* Index route
app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("captains/Index", { logs: allLogs });
  });
});

//* Show Route
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLogId) => {
    res.render("captains/Show", { log: foundLogId });
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
  connectToDB();
});
