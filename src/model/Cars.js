const mongoose = require('mongoose')

const CarsSchema = mongoose.Schema({
    marca: {
        type: String, 
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    ano: {
        type: Date, 
        require: false
    },
    chassis: {
        type: Number, 
        require: true,
        unique: true
    },
    tipo: {
        type: String, 
        require: true
    }
   
})

const Cars =  mongoose.model('Cars', CarsSchema )
module.exports = Cars