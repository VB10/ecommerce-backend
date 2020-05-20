var express = require('express');
var router = express.Router();
var Joi = require('joi');
const User = require('../models/user');
const baseError = require('../util/base_error');
const httpStatusCode = require('http-status-codes');

const {
    login,
    signup,
    forgot
} = require('../constants/route_path_constants');

const loginConstats = require('../constants/login_constats');

router.post(signup, function (req, res) {
    const body = req.body;
    const newUser = new User(body);

    newUser.save().then((val) => {
        res.status(httpStatusCode.OK).send(val.id)
    }).catch((val) => {
        res.status(httpStatusCode.BAD_REQUEST).send(val);
    })
})

router.post(login, (req, res) => {
    const query = {}
    query.email = req.body.email;
    query.password = req.body.password;

    User.findOne(query, (err, user) => {
        if (!user) {
            return res.status(httpStatusCode.NOT_FOUND).send(baseError(httpStatusCode.NOT_FOUND, loginConstats.loginFailed));
        } else {
            return res.send(user);
        }
    })
});

router.get(forgot, (req, res) => {
    const query = {};
    query.email = req.query.email;
    User.findOne(query, (err, user) => {
        if (!user) {
            return res.status(httpStatusCode.NOT_FOUND).send(baseError(httpStatusCode.NOT_FOUND, loginConstats.loginFailed));
        } else {
            return res.send(user);
        }
    })
});

module.exports = {
    router
}