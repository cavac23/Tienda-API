
// LLAMAR UN ROUTER DE EXPRESS
const express = require('express');

// LLAMAR CONTROLADOR DE CATEGORIAS
const control = require('../Controllers/ControllerCategoria.js');

// LLAMAR MIDDLEWARE DE AUTENTICACION
const verificarToken = require('../middlewares/verificarToken.js');

const routesCategoria = express.Router();

// RUTAS PUBLICAS
routesCategoria.get('/', control.listarCategorias);
routesCategoria.get('/:id', control.obtenerCategoriaPorId);

// RUTAS PROTEGIDAS
routesCategoria.post('/', verificarToken, control.crearCategoria);
routesCategoria.put('/:id', verificarToken, control.actualizarCategoria);
routesCategoria.delete('/:id', verificarToken, control.eliminarCategoria);

module.exports = routesCategoria;
