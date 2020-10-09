require('dotenv').config();
var oauth = require("./oauth.js");
var express = require('express');
var path = require('path');

const app = express();
const PORT = 3000;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});