import React from 'react';
import Navigation from './navigation';

const Home = (req, res) => {
    return(
        <div >
            <Navigation/>
            <section className="u-clearfix u-image u-section-1" style={{height: "800px"}}>
                <h2 className='center' style={{gravity:"center"}}>Inicio</h2>
            </section>
        </div>
    )
}

export default Home;