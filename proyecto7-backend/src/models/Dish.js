const mongoose = require('mongoose');

const dishSchema = mongoose.Schema(
    {
        idProd: {
            type: String,
            required: true
        },
        priceID: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        img: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        region: {
            type: String,
            enum: ['Norte', 'Noreste', 'Centro-Oeste', 'Sudeste', 'Sur'],
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
