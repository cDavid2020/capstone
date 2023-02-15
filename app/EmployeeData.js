import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";

const createFakeUser = () => {
id: faker.datatype.uuid(),
avatar: faker.internet.avatar(),
firstName: faker.name.firstName(),
lastName: faker.name.LastName(),
phrase: faker.hacker.phrase(),
username: faker.internet.userName(),
});
// create 1000 users with faker in an array
//const users = Array.from({ length: 100 }, createFakeUser); // create an array of undefined elements.
const users = Array.from({ length: 100 }).map(createFakeUser);// now its an array i can MAP over each element. The map() function goes over each element of a collection and applies a given function to it, and returns a new collection with the transformed values

fs.writeFile("users.json", JSON.stringify(users, null, 2), "utf8");