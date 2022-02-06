import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './mesa.css';
import ShowImage from './ShowImage';

const Mesa = ({mesa}) => {
    const [count, setCount] = useState(mesa.count)
    console.log(mesa)
    return (
      <div className="card m-10 mesa-cont">
        <div className="row">
          <img className="img-cont" item={mesa._id} url="mesa" />
          <p className='pMesa'>Mesa: {mesa.Nmesa}</p>
          <p className='pMesa'>Mesero: {mesa.mesero}</p>
          <p className='pMesa'>Cuenta: ${mesa.Cuenta}</p>
            <Link to={`/mesas/${mesa._id}`}>
              <button className="btn btn-success">Ver Mesa</button>
            </Link>
        </div>
      </div>
    )
  }
  
  
  export default Mesa;