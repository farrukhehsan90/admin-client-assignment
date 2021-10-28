const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const status = require("./Routes/status");
const signIn_signUp = require("./Routes/signIn_&_SignUp");
const waiting = require("./Routes/Waiting");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
env.config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database Connected");
    app.listen(5000, () => console.log("Server is Listening at 5000"));
  });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use("/status", status);

app.use("/user", signIn_signUp);

app.use("/waiting", waiting);

app.get("/", (req, res) => {
  res.send("Hello from server");
});
