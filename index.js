const exp = require('express');
require('dotenv').config();
const enrutador=require('./routes/router')


const app= exp();

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());

//Ruta principal para las peticiones GET, POST, PUT, DELETE.
app.use('/v1',enrutador)

const logger = require ('morgan')
app.use(logger('dev'));




app.listen(process.env.PORT, ()=>{
    console.log(`Server corriendo en el puerto ${process.env.PORT}`);  
    //Cuando el server este funcionando en el puerto que se establece en el entorno de ejecución, se imprime este mensaje en consola.)
});