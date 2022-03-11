const bcrypt = require('bcryptjs')

let user = { name: "Narasimha", email: "greetlabs@gmailc.om", password: "abc123", cc: "12341234" }

let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
console.log(user)
user = { ...user, password: new_Password, cc: new_CC }
console.log(user)
/*
console.log(user.password)
console.log(new_Password)
console.log(user.cc)
console.log(new_CC) */