import React, { useState, useEffect } from 'react';
import Navigation from './navigation';
import "./css/login.css"
import { iniciarSesion, autenticarUsuario } from './apiCore';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const M = require('materialize-css')

    let navigate = useNavigate();
    const [values, setValues] = useState({
        correo:'',
        password: '',
        error: '',
        succes: false
    })

    const {correo, password, loading, error} = values;

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false, loading: false});
        iniciarSesion({correo, password})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error,loading:false})
                console.log("Error")
                M.toast({html:"Error en los datos"});
            }else{
                autenticarUsuario(
                    data, ()=>{
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    }) 
                    M.toast({html:"Bienvenido"});
                    navigate("/");
                    console.log(data)                
                })
                console.log("Exito")
            }
        })
       
    };

    

    const handleChange = name => event =>{
        setValues({...values, error: false,[name]:event.target.value})
        console.log(event.target.value)
    };




    return(
        <div class="u-body">
        <Navigation/>
        <section className="u-clearfix u-image u-section-1" id="sec-7dc5" data-image-width="1380" data-image-height="853" style={{height: "800px"}}>
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-align-left u-container-style u-grey-10 u-group u-radius-30 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                        <h2 className="u-text u-text-default u-text-1">Iniciar Sesión</h2>
                        <div className="u-form u-form-1">
                            <form method="POST" className="u-clearfix u-form-spacing-7 u-form-vertical u-inner-form" style={{padding: "10px"}} source="custom" name="form">
                                <input type="hidden" id="siteId" name="siteId" value="243595601"/>
                                <input type="hidden" id="pageId" name="pageId" value="213315274"/>
                                <div className="u-form-group u-form-name">
                                <label for="name-bf19" className="u-label">Correo</label>
                                <input 
                                    type="text" 
                                    placeholder="Introduzca su correo" 
                                    id="name-bf19" 
                                    name="correo" 
                                    value={correo}
                                    onChange={handleChange('correo')}
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required=""/>
                                </div>
                                <div className="u-form-email u-form-group">
                                <label for="email-bf19" className="u-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    onChange={handleChange('password')}
                                    placeholder="Introduzca su contraseña" 
                                    id="email-bf19" 
                                    name="clave" 
                                    value = {password}
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required=""/>
                                </div>
                                <div className="u-align-center u-form-group u-form-submit">
                                <a   className="u-btn u-btn-round u-btn-submit u-button-style u-radius-25 u-btn-1">Iniciar Sesión</a>
                                <input onClick={clickSubmit} type="submit" value="submit" class="u-form-control-hidden"></input>
                                </div>                                
                                <input type="hidden" value="" name="recaptchaResponse"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login;