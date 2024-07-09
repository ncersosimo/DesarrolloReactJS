import React from 'react';
import { obtenerProductos } from '../data.js';
import { NavLink} from 'react-router-dom';

function Home() {
    let productos = obtenerProductos();
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {productos
            .map((producto) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "hotPink" : null,
                                // textDecoration: isActive ? "underline" : null,
                            }
                        }}
                        key={producto.id}
                        to={`/producto/${producto.id}`}
                    >
                        {producto.nombre}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Home;