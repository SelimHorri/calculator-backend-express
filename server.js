
const express = require("express");
const app = express();

app.listen("3000", function() {
  console.log("Listening to port 3000...");
});



app.get("/msg", function(req, res) {
  res.send("<h2>Hello Friend</h2>");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

