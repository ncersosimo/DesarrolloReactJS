import React from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1 className='header-title'>E-Commerce</h1>
        <nav className='header-nav'>
			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "hotPink" : null,
						textDecoration: isActive ? "underline" : null,
					}
				}}
				to='/'
			>
				Inicio
			</NavLink>
			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "hotPink" : null,
						textDecoration: isActive ? "underline" : null,
					}
				}}
				to='/login'
			>
				Login
			</NavLink>
			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "hotPink" : null,
						textDecoration: isActive ? "underline" : null,
					}
				}}
				to='/registro'
			>
				Registro
			</NavLink>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default App;