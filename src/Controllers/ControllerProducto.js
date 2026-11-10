// LLAMAR AL MODELO DEL PRODUCTO
const Producto = require('../models/modelProducto.js');

// VALIDAICONES DE DATOS
const datosValidados = d => d.nombre && Number(d.precio) > 0 && Number(d.stock) >= 0;

// VALIDADICON del ID
const idValid = id => Number(id) > 0;

async function listarProductos(req, res) {
    res.status(200).json(await Producto.listarProductos());
}

async function obtenerProductoPorId(req, res) {
    const id = req.params.id;

    if (!idValid(id)) {
        return res.status(400).json({error: 'ID inválido'});
    }

    const producto = await Producto.obtenerProductoPorId(id);

    if (!producto) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    return res.status(200).json(producto);
}

async function crearProducto(req, res){
    const {nombre, precio, stock} = req.body;
    if(!datosValidados({nombre, precio, stock})){
        return res.status(400).json({error: 'Datos no validos'});
    }
    res.status(201).json(await Producto.crearProducto(nombre, precio, stock));
}

async function actualizarProducto(req, res) {
    const id = Number (req.params.id);
    const { nombre, precio, stock } = req.body;
    
    if (!idValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    if (!datosValidados({ nombre, precio, stock })) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }

    const producto = await Producto.actualizarProducto(id, nombre, precio, stock);

    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado'});
    }
    return res.status(200).json(producto);
}
 
async function eliminarProducto(req, res) {
    const id = Number (req.params.id);
    
    if (!idValid(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const filasEliminadas = await Producto.eliminarProducto(id);

    if (!filasEliminadas) {
        return res.status(404).json({ error: 'Producto no encontrado'});
    }
    return res.status(204).send();
}  


module.exports = {
    listarProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}