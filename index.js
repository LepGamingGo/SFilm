const fs = require("fs");
const sfilm = require("./dependencies/sfilm/sfilm.js");

var token = fs.readFileSync('token.txt', 'utf8');

sfilm.login(token);