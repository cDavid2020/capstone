// User.js is used to CRUD define what you can do with a user

const express = require("express");
const router = express.Router();

// usually you would do
router.get("/", (req, res) => {
  res.send("You just created a user");
});

module.exports = router; // export the router

/// ////////////////////

const app = express();

/*
V1 CODE: const { append } = require("express/lib/response");
const router = express.Router();
 */

app.listen(3005, () => {
  console.log("Server running on port 3005");
});

// usually post request to create a user you would do

// Initiate the route
const userRoute = require("./routes/User");

append.use(userRoute, "/user"); // whaterver is write will be executable at localhost:3005/user. Making a POST request to localhost:3005/

/// ///

/*
Changed the variable name 'app.listen' to 'append.listen' to avoid confusion with the 'app' variable in the 'express' module

app.listen(3005, () => {
  console.log("Server running on port 3005");
});)
 */
