CREATE TABLE pedidos (
    id SERIAL PRIMARY key, 
    cliente_id INTEGER NOT NULL REFERENCES clientes(id),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente',
    total NUMERIC(10, 2) NOT NULL DEFAULT 0
);

CREATE TABLE detalle_pedido (
    id SERIAL PRIMARY key,
    pedido_id INTEGER NOT NULL REFERENCES pedidos(id),
    producto_id INTEGER NOT NULL REFERENCES productos(id),
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    precio_unitario NUMERIC(10, 2) NOT NULL,
    subtotal NUMERIC (10, 2) NOT NULL
)