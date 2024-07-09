import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './routes/NotFound.jsx';
import FormularioRegistro from './routes/FormularioRegistro.jsx';
import FormularioLogin from './routes/FormularioLogin.jsx';
import Home from './routes/Home.jsx';
import Productos from './routes/productos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='login' element={<FormularioLogin />} ></Route>
          <Route path='registro' element={<FormularioRegistro />} ></Route>
        </Route>
        <Route path='/producto/:productoId' element={<Productos />} ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
)
