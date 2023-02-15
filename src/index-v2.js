// CODE V1: export const add2Nums = (num1, num2) => num1 + num2;
const express = require("express");
const app = express();

// create a route
const userRoute = require("./routes/User");
app.use("/user", userRoute); // correct 2/14/23

// Previously:
// app.use(userRoute, "/user");  old 2/14/23
const faker = require("faker");
const currentYear = new Date().getFullYear();

const people = faker.helpers.times(100, (n) => {
  // get the current year
  const hireDate = faker.date.between(
    //   // Generate a random hire date between 16 years ago and the beginning of the current year
    new Date(currentYear - 16, 0, 1), // / Start date is 16 years ago on January 1st
    new Date(currentYear, 0, 1) //  End date is the beginning of the current year on January 1st
  );

  return {
    employeeId: n + 1, // Create an employeeId number starting at one and increment to 100
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
    },
    hireDate,
  };
});

// print the contents of the `people` array
console.log(people);

// whatever is written will be executable at localhost:3005/user. Making a POST request to localhost:3005/
app.listen(3005, () => {
  console.log("Server running on port 3005");
});
