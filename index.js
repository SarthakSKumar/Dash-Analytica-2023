const bcrypt = require("bcryptjs");
const saltRounds = 10;
const password = "12345678";

const passwordHash = bcrypt.hashSync(password, saltRounds);

console.log(passwordHash);
