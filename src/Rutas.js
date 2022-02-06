import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './core/Home';
import Login from './core/Login'
import Registro from './core/Registro'
import Mesas from './core/Mesas'
import Platos from './core/Platos'

const Rutas = () => {
    return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/registrarse" element={<Registro/>}/>
            <Route exact path="/platos" element={<Platos/>}/>
            <Route exact path="/mesas" element={<Mesas/>}/>
        </Routes>
    </Router>
    );
}

export default Rutas;
