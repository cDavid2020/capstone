// CODE V1: export const add2Nums = (num1, num2) => num1 + num2;
const express = require("express");
const app = express();

// create a route
const userRoute = require("./routes/User");
app.use("/user", userRoute);
// Previously:
// app.use(userRoute, "/user");

// whaterver is written will be executable at localhost:3005/user. Making a POST request to localhost:3005/
app.listen(3005, () => {
  console.log("Server running on port 3005");
});
