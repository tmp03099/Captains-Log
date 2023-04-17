const mongoose = require("mongoose");

// * Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function () {
  //! connect to mongodbB
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //listen for connection
  db.on("error", (error) => console.error(error));
  db.on("open", () => console.log("Connected to MongoDB"));
  db.on("close", () => console.log("Mongo disconnected"));
};
