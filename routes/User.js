// User.js is used to CRUD define what you can do with a user

const express = require("express");

const app = express();

/*
V1 CODE: const { append } = require("express/lib/response");
const router = express.Router();
 */

//usually post request to create a user you would do

// Initiate the route
const userRoute = require("./routes/User");
// Pedrotech app.listen(3005, () => {
//   console.log("Server running on port 3005");
append.use(userRoute, "/user"); // whaterver is write will be executable at localhost:3005/user. Making a POST request to localhost:3005/

append.listen(3005, () => {
  console.log("Server running on port 3005");
});

///////

// Pedrotech

const express = require("express");

const app = express();

app.listen(3005, (( => {
  console.log("Server running on port 3005");
});)
