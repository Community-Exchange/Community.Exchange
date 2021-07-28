const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/community", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  
}, () => console.log("Connected to db."));

app.use(routes);
// app.use((err, req, res, text) =>{
//   console.log(err.stack);
//   res.type("text/plain");
//   res.status(500);
//   res.send("internal server error 500");
// })


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
