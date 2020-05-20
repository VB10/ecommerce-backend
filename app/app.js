// var express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const httpStatusCode = require('http-status-codes');
var cors = require('cors');


var app = require('express')();
const router = require('express').Router();
const port = process.env.PORT || 4000;
const socketConstants = require('./constants/socket_constants');

var http = require('http').Server(app);
var io = require('socket.io')(http);
const userController = require('./controllers/user_controller');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// const productController = require('./controllers/product_controller');


mongoose.connect("mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(port, () => console.log(port));






// app.use(productController.router);
app.use(userController.router);