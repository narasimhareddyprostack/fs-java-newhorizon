let user = { id: 101, name: "Rahul Gandhi", email: "raghul@gmail.com" }

let details = { email: "Rahul@tcs.com", salary: 45000, loc: ["Noida", "Wayanad"] }

let user_Details = { ...user, ...details }

console.log(user_Details)