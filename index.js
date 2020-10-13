require('dotenv').config();
var oauth = require("./oauth.js");
var app = require('express')();
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.get('/break', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/break.html"));
});
app.get('/starting', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/starting.html"));
});
app.get('/ending', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/ending.html"));
});
app.get('/overlay', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/overlay.html"));
});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/login.html"));
});

http.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on("disconnect", () => {
    console.log('user disconnected');
  });
});
