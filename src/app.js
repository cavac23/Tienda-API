// LLAMAR A EXPRESS
const express = require('express');
//Llamar a las rutas de productos
const routesProductos = require('./routes/routesProductos.js');
 
// CREAR APP DE EXPRESS
const app = express();
app.use(express.json());
 
// RUTAS DE PRODUCTOS
app.use('/productos', routesProductos);
 
// MANEJO DE ERRORES 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// SIRVE PARA EXPORTAR O EMPAQUETAR LA APP
module.exports = app;