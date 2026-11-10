// Un arreglo es una lista, entre [ ]
const productos = [
  { id: 1, nombre: 'Mouse', precio: 12.5 },
  { id: 3, nombre: 'Monitor', precio: 180 }
];

// push: agrega al final
productos.push({ id: 4, nombre: 'Parlante', precio: 30 });

// find: busca UNO que cumpla la condición
const encontrado = productos.find((p) => p.id === 3);
console.log(encontrado.nombre, encontrado.precio);   // Monitor

// filter: se queda con TODOS los que cumplen
const sinMouse = productos.filter((p) => p.id !== 1);
console.log(sinMouse.length);     // 2

console.log(productos)