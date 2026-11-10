// LLAMAR A DOTENV PARA VARIABLES DE ENTRONO
require('dotenv').config();

//LLAMAR A LA APLICACION DE EXPRESS
const app = require('./src/app.js');

// CONFIGURAR E INICIAR SERVIDOR
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto %{PORT}');
});