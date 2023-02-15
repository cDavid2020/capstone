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

const users = Array.from({ length: 100 }).map(createFakeUser);

fs.writeFile("users.json", JSON.stringify(users, null, 2), "utf8");