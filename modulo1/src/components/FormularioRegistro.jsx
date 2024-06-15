import React from 'react';
import './FormularioRegistro.css';;

const FormularioRegistro = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulario enviado...Mentira');
    };

    return (
        <div className="container">
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />

                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="confirmar_password">Confirmar Contraseña:</label>
                    <input type="password" id="confirmar_password" name="confirmar_password" required />
                </div>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioRegistro;