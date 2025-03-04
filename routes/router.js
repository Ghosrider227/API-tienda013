const exp= require('express')
const router= exp.Router();
const controlProducto=require('../controller/productos.controller');


router.get('/productos', controlProducto.buscarTodo);

router.get('/productos', controlProducto.buscarPorNom);

router.get('/productos/:x', controlProducto.crearProducto);

router.put('/productos/ref', controlProducto.actualizarProducto); 

router.delete('/productos/:id', controlProducto.eliminarProducto );


module.exports= router;