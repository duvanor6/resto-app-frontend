import { API } from '../config'
import queryString from 'querystring-es3';
import Axios from 'axios';


export const fetchMesas= async()=>{
    const response = await Axios(`${API}/mesas/obtenerMesas`)    
    const res = JSON.stringify(response.data)
    console.log(res)
    return response.json()
}

export const obtenerMesas = (req, res) => {
    return fetch(
      `${API}/mesas/obtenerMesas`,
      {
        method: 'GET'
      }
    )
      .then(res =>{ 
        console.log(res)
        return res.json()
      })
      .catch(err => console.log(err))
  }


export const iniciarSesion = correo =>{
    
    return fetch (`${API}/identificarse/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(correo)
    }).then(response =>{
        console.log(response.data)
        return response.json();
        
    })
    .catch(err =>{
       console.log(err);
    })
};

export const agregarMesa = mesa => {
    return fetch(`${API}/mesas/agregarMesa`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mesa)
    })
    .then(response => {
        if(response.status==400){
            
        }else{
            console.log(response);
            return response.json();
        }
        
    })
    .catch(error => {
        console.log(error);
    })
}

export const registrarUsuario = user => {
    return fetch(`${API}/identificarse/registrarse`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};

export const autenticarUsuario = (data, next) => {
    if(typeof window !== 'undefined'){
        console.log("datos guardados",data);
        localStorage.setItem('jwt',JSON.stringify(data));
        next()
    }
}


export const comprobarAutenticacion = () => {
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
        return false; 
    
}

export const finalizarSesion = (next) =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/identificarse/cerrarsesion`,{
            method: 'GET',
        })
        .then(response => {
            console.log('cerrando sesion', response);
        })
        .catch(err => {
            console.log(err);
        });
    }
}