const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const status = require("./Routes/status");
const signIn_signUp = require("./Routes/signIn_&_SignUp");
const waiting = require("./Routes/Waiting");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const url =
  "mongodb://admin_123:qMXH0LIxU8CDlNRM@cluster0-shard-00-00.qcei4.mongodb.net:27017,cluster0-shard-00-01.qcei4.mongodb.net:27017,cluster0-shard-00-02.qcei4.mongodb.net:27017/users?ssl=true&replicaSet=atlas-li0i2t-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
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
