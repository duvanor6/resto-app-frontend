import React, { useState, useEffect }from 'react';
import Navigation from './navigation';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { agregarMesa, autenticarUsuario, fetchMesas, obtenerMesas } from './apiCore';
import Mesa from './mesa'


const useStyles=makeStyles((theme) => ({

    
    modal:{
        position:'abolute',
        width: 350,
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3,4),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textfield: {
        width: '100%'
    }, 
    menuContainer: {
        width: '100%',
        height: '60px',
        position: 'relative',
        alingContent: 'center'
    },
    menuContainerInto: {
        width: '30px',
        height: '20px',
        position: 'relative',
        aling:'center'
    }
}))


const Mesas = () => {

    const M = require('materialize-css')
    

    const [values, setValues] = useState({
        Nmesa:'',
        mesero: '',
        error: '',
        succes: false
    })
    const {Nmesa, mesero, loading, error} = values;

    const [mesas, setMesas]= useState([]);

    const [erro, setErro] = useState(false);

    const cargarMesas = () => {
        obtenerMesas().then(data => {
            if (data.error) {
                setErro(data.error)
              } else {
                console.log("datos mesa: "+ data);
                setMesas(data);                
              }
        })
    }

    useEffect(() => {
        cargarMesas();
      }, [])


    const styles = useStyles();

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false, loading: false});
        agregarMesa({Nmesa, mesero})
        .then(data => {
            if(data.error==400){
                setValues({...values,error:data.error,loading:false})
                console.log("Error")
                M.toast({html:"Error en los datos"});
            }else{  
                setValues({
                    ...values,
                    Nmesa:'',
                    mesero:'',
                    error:'',
                    success:true
                })
                controlModal();              
                M.toast({html:"Mesa agregada"});
                cargarMesas();
                console.log("Exito")
            }
        })
        .catch(err => {
            M.toast({html:"Error al intentar registrar"});
        })
       
    };

    const handleChange = name => event =>{
        setValues({...values, error: false,[name]:event.target.value})
        console.log(event.target.value)
    };

    const[modal, setModal] = useState(false);

    const controlModal= () => {
        setModal(!modal);
    }

    const bodyModal = (
        <div className={styles.modal}>
            <div aling="center">
                <h2>Agregar Mesa</h2>
            </div>
            <form 
                method="POST" 
                className="u-clearfix u-form-spacing-7 u-form-vertical u-inner-form" 
                style={{padding: "10px"}} 
                source="custom" 
                name="form"
            >                             
                                
                                <div className="u-form-group u-form-name">
                                <label for="name-bf19" className="u-label">Numero de Mesa</label>
                                <input 
                                    type="number" 
                                    placeholder="Introduzca Nº de Mesa" 
                                    id="name-bf19" 
                                    name="Nmesa" 
                                    value={Nmesa}
                                    onChange={handleChange('Nmesa')}
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required=""/>
                                </div>

                                <div className="u-form-email u-form-group">
                                <label for="email-bf19" className="u-label">Mesero</label>
                                <input 
                                    type="text" 
                                    onChange={handleChange('mesero')}
                                    placeholder="Introduzca nombre mesero" 
                                    id="email-bf19" 
                                    name="clave" 
                                    value = {mesero}
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required=""/>
                                </div>
                                <div className="u-align-center u-form-group u-form-submit">
                                <a   onClick={clickSubmit} className="u-btn u-btn-round u-btn-submit u-button-style u-radius-25 u-btn-1">Agregar Mesa</a>
                                <input  type="submit" value="submit" class="u-form-control-hidden"></input>
                                <a   onClick={()=>controlModal()} className="u-btn u-btn-round u-btn-submit u-button-style u-radius-25 u-btn-1">Cancelar</a>
                                <input class="u-form-control-hidden"></input>
                                </div>                                
                                <input type="hidden" value="" name="recaptchaResponse"/>
                            </form>       
        
        </div>
        
    )

    const resultadoMap = Object.values(mesas).map((value) =>{
       console.log(value._id)
       
       return (<div key={value._id} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                        <Mesa videogame={value} />
                    </div>);
    })

    return(
        <div >
            
            <Navigation/>
            
            <section className="u-clearfix u-image u-section-1" style={{height: "800px"}}>
            <div className={styles.menuContainer}>
            
                <div className={styles.menuContainerInto}>
                    <a className='u-btn u-btn-round u-btn-submit u-button-style u-radius-25 u-btn-1' onClick={()=>controlModal()}> Agregar Mesa</a>
                </div>
            </div>
            <div >
            
            <section className="container" >
                <div className="rowMesa" >
                {Object.values(mesas).map((values) => (
                    <div key={values._id} className="cont-mesa1"  >
                        <Mesa mesa={values} />
                    </div>
                    ))}
                </div>
            </section>
            

            </div>
                
            <Modal open={modal} align="center" style={{'margin-top':'20%',"margin-left":'20%'}} close={controlModal}>
                {bodyModal}
            </Modal>

            </section>
        </div>
    )
}

export default Mesas;