import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <div style={{display:"flex", 
            justifyContent: "center", 
            flexDirection: "column",
            alignItems: "center"}}>
            <h1>No Encontrado</h1>
            <button onClick={() => navigate(-1)}>Volver</button>
        </div>
    )
}

export default NotFound;