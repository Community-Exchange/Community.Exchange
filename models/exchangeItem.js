const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exchangeItemSchema = new Schema({
    userID: {
        type: String,
    },
    email: {
        type: String,
    },
    city: {
        type: String,
    },
    need: {
        type: String,
    },
    details: {
        type: String,
    },

})

const ExchangeItem = mongoose.model("ExchangeItem", exchangeItemSchema);
module.exports = ExchangeItem;