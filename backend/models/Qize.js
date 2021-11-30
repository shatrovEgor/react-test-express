const {Schema, model} = require('mongoose')

const Qize = new  Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    sex: {type: String, required: true},
    dough: {type: String},
    margarita: {type: Boolean},
    marinara: {type: Boolean},
    fourSeason: {type: Boolean},
    fourChees: {type: Boolean},
    carbonara: {type: Boolean},
    fish: {type: Boolean},
    hamMash: {type: Boolean},
    havai: {type: Boolean},
    textAria: {type: String},

})