const mongoose = require('../config/conection');

const schemaProducto= new mongoose.Schema ({
    referencia:{
        type:[String, 'el nombre debe ser texto'],
        required:[true, 'La referencia debe ser obligatoria']
    },
    nombre:{
        type:[String,'el nombre debe ser texto'],
        required:[true, 'El nombre del producto debe ser obligatorio']
    },
    precio:{
        type: [Number, 'Debe ser numerico'],
        default:  [0, "El precio minimo es 0"]
    },

}, {versionKey:false});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;