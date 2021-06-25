const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ballyhoo"
);

const userSeed = [
  {
    name: "Joe Bob",
    email: "joebob@gmail.com",
    city: "Kirkland",
    exchangeCurrency: ["Writing", "Mechanics", "Teaching"],
    date: new Date(Date.now()),
  },
  {
    name: "Jane Doe",
    email: "janeDoe@gmail.com",
    city: "Seattle",
    exchangeCurrency: ["Writing", "Mechanics", "Teaching"],
    date: new Date(Date.now()),
  },
  {
    name: "Donny Dingle",
    email: "donDingle@yahoo.com",
    city: "Seattle",
    exchangeCurrency: ["Writing", "Mechanics", "Teaching"],
    date: new Date(Date.now()),
  },
  {
    name: "Apple Box",
    email: "boxApple@yahoo.com",
    city: "Redmond",
    date: new Date(Date.now()),
  },
  {
    name: "Mike Hunt",
    email: "mike@hotmail.com",
    zipcode: "Redmond",
    exchangeCurrency: ["Writing", "Mechanics", "Teaching"],
    date: new Date(Date.now()),
  },
  {
    name: "Charlie Angel",
    email: "ca@gmail.com",
    zipcode: "Kirkland",
    exchangeCurrency: ["Writing", "Mechanics", "Teaching"],
    date: new Date(Date.now()),
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
