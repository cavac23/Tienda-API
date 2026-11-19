// LLAMAR A EXPRESS
const express = require('express');
//Llamar a las rutas de productos
const routesProductos = require('./routes/routesProductos.js');
//Llamar a las rutas de categoria
const routesCategoria = require('./routes/routesCategoria.js');
//Llamar a toutesAuth
const routesAuth = require('./routes/routesAuth.js');
//llamar a las rutas de pedido
const routesPedido = require('./routes/routesPedido.js');

 
// CREAR APP DE EXPRESS
const app = express();
app.use(express.json());
 
// RUTAS DE PRODUCTOS
app.use('/productos', routesProductos);

// RUTAS DE CATEGORIA
app.use('/categorias', routesCategoria);

// debajo de app.use('/categorias', ...) y ANTES del 404
app.use('/auth', routesAuth);

// RUTAS DE PEDIDO
app.use('/pedidos', routesPedido);

// RUTAS NO ENCONTRADAS
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});
 
// MANEJO DE ERRORES 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// SIRVE PARA EXPORTAR O EMPAQUETAR LA APP
module.exports = app;






