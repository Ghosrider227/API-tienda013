const mongoose = require('mongoose');
require('dotenv').config();

const URI= 'mongodb+srv://APITIENDA:pdkXJiCwwH1QJ4Mr@adso2903013.7jhin.mongodb.net/Inventario'

mongoose.connect(URI)

module.exports = mongoose;