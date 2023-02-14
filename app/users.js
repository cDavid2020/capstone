// create 1000 users with faker in an array

const users = Array.from({ length: 100 }, createFakeUser); // create an array of undefined elements.
const users = Array.from({ length: 100 }).map(createFakeUser); // now its an array i can mak over each element. map goes over each element and .
