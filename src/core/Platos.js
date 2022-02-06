import React from 'react';
import Navigation from './navigation';


const Platos = () => {
    return(
        <div>
            <Navigation/>
            <section className="u-clearfix u-image u-section-1" style={{height: "800px"}}>
                <div className='relative'>
                <div className='container left' style={{width:"15%"}}>
                <h2>Aqui va el menu</h2>
                </div>
                <div className='container relative' >
                <h2 className='center' >Platos</h2>
                </div>
                </div>
                
                
            </section>
        </div>
    )
}

export default Platos;