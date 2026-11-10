// IMPORTAR LA LIBRERIA PG (POSTGRESQL)
const {Pool} = require('pg');

// TRAER VARIABLES DE ENTORNO
const dotenv = require('dotenv');
dotenv.config(); //carga las variables del archivo .env
 
// CREAR POOL DE CONEXIONES A LA BASE DE DATOS 
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
 
// EXPORTAR EL POOL (CONEXION) PARA USARLO EN OTROS ARCHIVOS
module.exports = pool;


// injected env(6) from.env: se crgaron 6 variables de entorno.