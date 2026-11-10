// LLAMAR UN ROUTER DE EXPRESS 
const express = require('express');
 
// LLAMAR CONTROLADOR DE PRODUCTOS 
const control = require('../Controllers/ControllerProducto.js');
 
const routesProductos = express.Router();
 
// RUTAS DE PRODUCTOS 
routesProductos.get('/', control.listarProductos);
routesProductos.get('/:id', control.obtenerProductoPorId);
routesProductos.post('/', control.crearProducto);
routesProductos.put('/:id', control.actualizarProducto);
routesProductos.delete('/:id', control.eliminarProducto);

module.exports = routesProductos;
