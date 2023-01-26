const mongoose = require("mongoose");
// Connect to the MongoDB cluster
const db = {
  connection() {
    mongoose.connect(
      "mongodb+srv://admin:admin@tesco-database.5xjs5p7.mongodb.net/?retryWrites=true&w=majority",
      // "mongodb+srv://HashirKhan:hashirkhan777@cluster0.ulzxi.mongodb.net/techo?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    // Handle connection events
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connection opened");
    });

    mongoose.connection.on("error", (err) => {
      console.log(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose connection closed");
    });
  },
};
module.exports = db;
