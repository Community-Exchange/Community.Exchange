const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
//   "need" from Exchange Post Form
  exchangeItem: [{
    type: Schema.Types.ObjectId,
    ref: "ExchangeItem",
  }],
//   goods or service
  exchangeType: {
    type: String,
  },
//   exchange claimed from Dashboard
  claimed: [{
      type: String,
  }],
  date: {
      type: Date,
      default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;