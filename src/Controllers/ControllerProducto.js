
// LLAMAR AL MODELO DEL PRODUCTO
const Producto = require('../models/modelProducto.js');
const Categoria = require('../models/modelCategoria.js');

// VALIDACIONES DE DATOS
const datosValidados = d => d.nombre && Number(d.precio) > 0
    && Number(d.stock) >= 0 && idValid(d.categoria_id);

// VALIDACIÓN DEL ID
const idValid = id => Number.isInteger(Number(id)) && Number(id) > 0;

// LISTAR PRODUCTOS
async function listarProductos(req, res) {
    return res.status(200).json(await Producto.listarProductos());
}

// OBTENER PRODUCTO POR ID
async function obtenerProductoPorId(req, res) {
    const id = req.params.id;

    if (!idValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const producto = await Producto.obtenerProductoPorId(id);

    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.status(200).json(producto);
}

// CREAR PRODUCTO
async function crearProducto(req, res) {
    const { nombre, precio, stock, categoria_id } = req.body ?? {};

    if (!datosValidados({ nombre, precio, stock, categoria_id })) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    // Verificar si existe la categoría antes de guardar
    const categoria = await Categoria.obtenerCategoriaPorId(categoria_id);

    if (!categoria) {
        return res.status(400).json({ error: 'La categoría no existe' });
    }

    const nuevo = await Producto.crearProducto(
        nombre, precio, stock, categoria_id
    );

    return res.status(201).json(nuevo);
}

// ACTUALIZAR PRODUCTO
async function actualizarProducto(req, res) {
    const id = Number(req.params.id);
    const { nombre, precio, stock, categoria_id } = req.body ?? {};

    if (!idValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    if (!datosValidados({ nombre, precio, stock, categoria_id })) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    // Verificar si existe la categoría
    const categoria = await Categoria.obtenerCategoriaPorId(categoria_id);

    if (!categoria) {
        return res.status(400).json({ error: 'La categoría no existe' });
    }

    const actualizado = await Producto.actualizarProducto(
        id, nombre, precio, stock, categoria_id
    );

    if (!actualizado) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.status(200).json(actualizado);
}

// ELIMINAR PRODUCTO
async function eliminarProducto(req, res) {
    const id = Number(req.params.id);

    if (!idValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const filasEliminadas = await Producto.eliminarProducto(id);

    if (!filasEliminadas) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.status(204).send();
}

// EXPORTAR FUNCIONES
module.exports = {
    listarProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
