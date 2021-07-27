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

router.post("/api/exchanges", (req, res) => {
    
})

router.get("/api/user/:id", (req, res) => {
    console.log(req);
    User.findOne({userId: req.params.userId}).then((userData ) => {
        console.log("here's the user: "+ userData);
        res.json(userData);
    }).catch((err) =>{
        console.log("there was an error:" + err);
        res.json(err);
    })
})



module.exports = router;