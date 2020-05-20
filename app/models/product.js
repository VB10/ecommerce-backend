const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    image: {
        type: String,
        required: true,
        index: true,
    },
    price: {
        type: Number,
        required: true,
        index: true,
    },
    weight: {
        type: Number,
        required: true,
        index: true,
        default: 500
    },
    total: {
        type: Number,
        required: true,
        index: true,
    },
});

//Export the model
module.exports = mongoose.model('Product', productSchema);

const Joi = require('joi');
const loginSchema = Joi.object().keys({
    username: Joi.string()
        .min(3),
    .max(10),
    .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

app.post('/login', function (req, res) {
    const valid = Joi.validate(req.body, loginSchema).error === null;
    if (!valid) {
        res.status(422).json({
            status: 'error'
            message: 'Invalid request data'
            data: req.body
        });
    } else {
        // happy days - login user
        res.send(`ok`);
    }
});