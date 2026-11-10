// variables constantes
const nombre = "Chris"
const edad = 30
const estatura = 1.66

console.log("hola", nombre)
console.log(edad)
console.log(estatura)

// variabls let

let numero1 = 2.5
let numero2 = 3.5
let suma = numero1 + numero2

console.log("la suma de", numero1, "+", numero2, "es igual a", suma)
console.log(Number(5), "+", Number(3))

const estudiante = {
    nombre: "christian",
    edad: 26
}
console.log("-------objetos-------")
console.log(estudiante.nombre)
console.log(estudiante.edad)
console.log(`Hola ${estudiante.nombre}`)
console.log(`Hola ${estudiante.nombre}, tu edad es: ${estudiante.edad}`)
console.log("-------objetos-------")

// Funciones
console.log("-----Funciones-----")
function saludar(nombre){
    console.log("Hola", nombre);
    return `Hola ${nombre}`;
}

console.log(saludar())

const saludar2 = (nombre) => {
    console.log("Hola", nombre);
    return `Hola ${nombre}`;
   
}

saludar2 ('Funcion2')

const saludar3 = (nombre) => console.log(`Hola ${nombre}`)

saludar3 ('Funcion3')

// funcion de suma 

const sumar = (a, b) => a+b;
console.log(sumar(4+3));




// index.js
const express = require('express');   // 1. Traemos Express
const app = express();                 // 2. Creamos el servidor

// 3. Cuando llegue GET a "/", responde un texto
app.get('/vermiservidor', (req, res) => {
  res.send('¡Hola desde mi primer servidor!');
});

// 4. Encendemos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor listo en el puerto 3000');
});




//FALLO
const express = require('express');
const app = express();

// Permite leer el JSON que llega en el body (req.body)
app.use(express.json());

// DATOS SIMULADOS: todavía no tenemos base de datos
let productos = [
  { id: 1, nombre: 'Mouse', precio: 12.5, stock: 20, categoria:"Tecnologia" },
  { id: 2, nombre: 'Teclado', precio: 25, stock: 0, categoria:"Accesorios" },
  { id: 3, nombre: 'Monitor', precio: 180, stock: 5, categoria:"Accesorios" }
];
let siguienteId = 4;   // el id que tendrá el próximo producto

// GET /productos → la lista completa
app.get('/verProductos', (req, res) => {
  res.status(200).json(productos);
});

