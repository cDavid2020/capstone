// All the REQUESTS are made in the 'routes' folder

// User.js is used to CRUD define what you can do with a user

const express = require("express");
const router = express.Router();

const controller = require("../controllers/UserController");

// import the controller created
router.get("/", controller.get);

// export the router
module.exports = router;
