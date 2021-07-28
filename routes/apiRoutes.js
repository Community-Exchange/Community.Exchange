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
    
    User.findOne({email: req.params.id}).then((userData ) => {
        console.log("here's the user: "+ userData);
        res.json(userData);
    }).catch((err) =>{
        console.log("there was an error:" + err);
        res.json(err);
    })
});

router.get("/api/exchanges/:id", (req, res) => {
    User.findOne({email: req.params.id}).then(dbUser => {
        ExchangeItem.find({city: dbUser.city}).sort({date: -1}).then(dbExchange =>{
            res.json(dbExchange);
        }).catch(error => {
            console.log("Error loading exchanges for this user", error);
            res.json(error);
        })
    })
})



module.exports = router;