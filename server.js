
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen("3000", function() {
  console.log("Listening to port 3000...");
});



app.get("/msg", function(req, res) {
  res.send("<h2>Hello Friend</h2>");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", function(req, res) {
  
  var username = req.body.username;
  var password = req.body.password;
  
  if (username === "selimhorri" && password === "0000") {
    console.log("logged in at: " + new Date());
    res.send("Welcome back " + username.toUpperCase());
  }
  else {
    console.log("incorrect! at: " + new Date());
    res.redirect("/login");
  }
  
});

