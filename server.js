require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const methodOverride = require("method-override");

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
//! override using a query value
app.use(methodOverride("_method"));

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

//* Edit Route
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (error, foundLogEdit) => {
    if (!error) {
      res.render("captains/Edit", { log: foundLogEdit });
    } else {
      res.send({ msg: error.message });
    }
  });
});

//* Update Route
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  Log.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedLog) => {
      // res.send(updatedLog);
      res.redirect(`/logs/${req.params.id}`);
    }
  );
});

//* Show Route
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLogId) => {
    res.render("captains/Show", { log: foundLogId });
  });
});

//* Delete Route
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedLog) => {
    res.redirect("/logs");
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
  connectToDB();
});
