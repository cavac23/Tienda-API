const express = require('express');
const app = express();
const pool = require('./BaseDeDatos/db');

// Permite leer el JSON que llega en el body (req.body)
app.use(express.json());

// DATOS SIMULADOS: todavía no tenemos base de datos
let productos = [
  { id: 1, nombre: 'Mouse', precio: 12.5, stock: 20},
  { id: 2, nombre: 'Teclado', precio: 25, stock: 0},
  { id: 3, nombre: 'Monitor', precio: 180, stock: 5}
];
let siguienteId = 4;   // el id que tendrá el próximo producto

// GET /productos → la lista completa
app.get('/verProductos', (req, res) => {
  res.status(200).json(productos);
});

// RUTA DE PRUEBA

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ message: 'Conexión exitosa a la base de datos', time: result.rows[0].now });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    res.status(500).json({ message: 'Error al conectar a la base de datos', error: error.message });
  }
});

// SEGUNDO POST AGREGAR PRODUCTOS

app.post('/crearProducto', (req, res) =>{
  res.status(200).json({
    mensaje: 'Ruta para crear productos funcionando'
  });
});

//ENDPOINT ACTUALIZAR PRODUCTO POR SU ID

app.put('/productos/:id', async (req, res) => {
  const id = Number(req.params.id);
  const datos = req.body || {};
 try {
  if (!datos.nombre || !datos.precio || datos.precio <= 0) {
    return res.status(400).json({ mensaje: 'Datos inválidos' });
  }

  const resultado = await pool.query(
    `UPDATE productos SET nombre = $1, precio = $2, stock = $3
     WHERE id = $4 RETURNING *`,
    [datos.nombre, datos.precio, datos.stock || 0, id]
  );

  if (resultado.rows.length === 0) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  res.status(200).json(resultado.rows[0]);

 } catch (error) {
console.error('Error al actulizar el producto', error);
res.status(500).json({message: 'Error al actualizar el producto', error: error.message});
 } 
});

// ENDPOINT PARA DELETE PRODUCTO POR SU ID

app.delete('/productos/:id', async(req, res) => {
  const id = Number(req.params.id);
  const resultado = pool.query('DELETE FROM productos WHERE id = $1', [id]);

  if (resultado.rowsCount === 0) {
    return res.status(404).json({message: "Producto no encontrado"});
  }

  res.status(204).send();

});

app.listen(3000, () => {
  console.log('Servidor listo en el puerto 3000');
});