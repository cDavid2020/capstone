// All the REQUESTS are made in the 'routes' folder

// User.js is used to CRUD define what you can do with a user

const express = require("express");
const router = express.Router();

const controller = require("../controllers/UserController");

// import the controller created

router.get("/", controller.get);

module.exports = router; // export the router

/// ////////////////////

/*
V1 CODE: const { append } = require("express/lib/response");
const router = express.Router();
 */

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
