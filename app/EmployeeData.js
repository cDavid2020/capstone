// From - https://www.youtube.com/watch?v=8Dg5qVo53Vw
import { faker } from "@faker-js/faker";
/*
Why import "fs" from "fs" instead of import fs from "fs"?

In Node.js, "fs" is a built-in module that provides an API for working with the file system. The "promises" property of "fs" module returns a set of asynchronous functions that return Promises instead of using callbacks.

The statement "import { promises as fs } from 'fs';" is an ES6 import statement that allows you to import the "promises" property of the "fs" module and give it an alias of "fs". This makes it easier to reference the asynchronous file system functions provided by the "fs" module in your code.
 */
fs.writeFile("users.json", JSON.stringify(users, null, 2), "utf8"); // this takes in a JavaScript object and STRINGIFY the USERS we just created with .writeFile. Take the Array of objects and STRINGIFY into a JSON file readable in UTF8 format.

console.log(createFakeUser());