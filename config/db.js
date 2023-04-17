const mongoose = require("mongoose");

// * Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function () {
  //! connect to mongodbB
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB!");
  });

  //listen for connection
  db.on("error", (error) => console.error(error));
  db.on("open", () => console.log("Connected to MongoDB"));
  db.on("close", () => console.log("Mongo disconnected"));
};
