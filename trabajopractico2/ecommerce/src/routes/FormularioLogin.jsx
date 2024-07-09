import React from 'react';
import './Formulario.css';

const FormularioLogin = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Ha iniciado sesión...Mentira');
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="btn">Iniciar</button>
            </form>
        </div>
    );
};

export default FormularioLogin;