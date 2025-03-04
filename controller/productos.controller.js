const modeloProducto= require('../models/producto.model');


exports.buscarTodo=async (req,res)=>{
    let resultado = await modeloProducto.find({});
    console.log(resultado)
    if(resultado){
        res.json(resultado);

    }else{
        res.json({"mensaje":"No hay productos con este nombre"})
        
    }
};


exports.buscarPorNom= async (req,res)=>{
    let resultado = await modeloProducto.find({"nombre":req.params.x});
    console.log(resultado)
    if(resultado){
        res.json(resultado);

    }else{
        res.json({"mensaje":"No hay productos con este nombre"})
    }
};


exports.crearProducto=async (req,res)=>{
    let nuevoProducto= new modeloProducto({
        nombre: req.body.x,
        precio: req.body.precio
    });
    res.json(await nuevoProducto.save());
}


exports.actualizarProducto=async (req,res)=>{
    const productoEditado={
        nombre: req.body.x,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        };
    
    let Actualizacion = await modeloProducto.findOneAndUpdate({referencia:req.params.ref}, productoEditado);
    if(Actualizacion)
        res.status(200).json({"mensaje":"Producto actualizado correctamente"});
    else
        res.status(404).json({"mensaje":"Producto no encontrado"});
}


exports.eliminarProducto=async (req, res)=>{
    console.log(req.params.id , req.body.referenciaProducto)
    let elimincacion= await modeloProducto.findOneAndDelete({nombre:req.params.id});
    if (elimincacion)
        res.status(200).json({"mensaje": "eliminacion exitosa"})
    else
    res.status(404).json({"mensaje": "Producto no encontrado"})
};


