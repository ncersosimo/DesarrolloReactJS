import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { obtenerProducto } from '../data.js';
import NotFound from './NotFound.jsx';
import './Producto.css';

function Productos() {
    const handleComprar = () => {
        alert('Compra realizada con éxito...')        
    };

    const navigate = useNavigate();
    const { productoId } = useParams();
    const producto = obtenerProducto(Number(productoId));
    if (producto === undefined) return <NotFound />
    return (
        <main className='container'>
            <h2>{producto.nombre}</h2>
            <div className="form-group">
                <p className='label'>Marca</p>
                <p className='input'>{producto.marca}</p>
                <p className='label'>Descripcion</p>
                <p className='input'>{producto.descripcion}</p>
                <p className='label'>SKU</p>
                <p className='input'>{producto.sku}</p>
                <p className='label'>Precio</p>
                <p className='input'>{producto.precio}</p>
            </div>
            <button className="btn" onClick={() => handleComprar()}>Comprar</button>
            <button className="btn" onClick={() => navigate(-1)}>Volver</button>
        </main>
    )
}

export default Productos;