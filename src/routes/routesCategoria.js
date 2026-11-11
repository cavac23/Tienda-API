// LLAMAR UN ROUTER DE EXPRESS 
const express = require('express');
 
// LLAMAR CONTROLADOR DE PRODUCTOS 
const control = require('../Controllers/ControllerCategoria.js');
 
const routesCategoria = express.Router();
 
// RUTAS DE PRODUCTOS 
routesCategoria.get('/', control.listarCategorias);
routesCategoria.get('/:id', control.obtenerCategoriaPorId);
routesCategoria.post('/', control.crearCategoria);
routesCategoria.put('/:id', control.actualizarCategoria);
routesCategoria.delete('/:id', control.eliminarCategoria);

module.exports = routesCategoria;
