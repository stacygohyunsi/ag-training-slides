var express = require("express");
var app = express();
var server = require('http').Server(app);
var cors = require("cors");
var bodyparser = require("body-parser");
var Connection = require('./connect-db');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());
Connection.connectMongo();

app.use("/bower_components",express.static("bower_components"));
app.use("/images", express.static("resources"));
app.use("/api",require('./api'));

app.use(express.static("main"));

server.listen(process.env.PORT || 2222);