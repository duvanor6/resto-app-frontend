import React, {useEffect, useState} from 'react';
import Navigation from './navigation';
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from './apiCore';
import M from 'materialize-css'

const Registro = (req, res) => {
  

    let navigate = useNavigate();

    const [values, setValues] = useState ({
        nombre:'',
        correo:'',
        password: '',
        error:'',
        success: false
    })

    const {nombre, correo, password, success, error} = values

    const escucharCambios = nombe => event  => {
        setValues({...values, error:false,[nombe]:event.target.value})
    }

    const clickSubmit = (event) =>{
        event.preventDefault();
        registrarUsuario({nombre, correo, password})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error, success:false})
            }else {
                setValues({
                    ...values,
                    nombre:'',
                    correo:'',
                    password:'',
                    error:'',
                    success:true
                })
                M.toast({html:"Usuario registrado"});
                navigate("/login");
            }
        })
    }

    return(        
        <div>
            <Navigation/>
            <section className="u-clearfix u-image u-section-1" id="sec-7dc5" data-image-width="1380" data-image-height="853" style={{height: "800px"}}>
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-align-left u-container-style u-grey-10 u-group u-radius-30 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                        <h3 className="u-text u-text-default u-text-1">Registrarse</h3>
                        <div className="u-form u-form-1">
                            <form action="/registrarse" method="POST" className="u-clearfix u-form-spacing-7 u-form-vertical u-inner-form" style={{padding: "10px"}} source="custom" name="form">
                                <input type="hidden" id="siteId" name="siteId" value="243595601"/>
                                <input type="hidden" id="pageId" name="pageId" value="213315274"/>
                                <div className="u-form-group u-form-name">
                                <label for="name-bf19" className="u-label">Nombre</label>
                                <input 
                                    type="text" 
                                    value={nombre}
                                    onChange={escucharCambios('nombre')}
                                    placeholder="Introduzca su nombre" 
                                    id="name-bf19" 
                                    name="user" 
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" 
                                    required=""/>
                                </div>
                                
                                <div className="u-form-email u-form-group">
                                    <label for="email-bf19" className="u-label">Correo</label>
                                    <input 
                                        type="email" 
                                        placeholder="Introduzca su correo" 
                                        value={correo}
                                        onChange={escucharCambios('correo')}
                                        id="email-bf19" 
                                        name="correo" 
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" 
                                        required=""/>
                                </div>

                                <div className="u-form-password u-form-group">
                                <label for="email-bf19" className="u-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    placeholder="Introduzca su contraseña" 
                                    value={password}
                                    onChange={escucharCambios('password')}
                                    id="password-bf19" 
                                    name="clave" 
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" 
                                    required=""/>
                                </div>
                                
                                <div className="u-align-center u-form-group u-form-submit">
                                <a href="#" className="u-btn u-btn-round u-btn-submit u-button-style u-radius-25 u-btn-1">Registrarse</a>
                                <input type="submit" onClick={clickSubmit} value="submit" className="u-form-control-hidden"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Registro;