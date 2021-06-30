const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const ExchangeItem = require("../models/exchangeItem");

router.post("/api/user", ({body}, res) => {
    User.create(body).then((userData)=> {
        res.json(userData);
        console.log("User entered into DB", userData);
    }).catch((err) => {
        res.json(err);
        console.log(err);
    });
});

module.exports = router;