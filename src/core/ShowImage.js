import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import './mesa.css';

const useStyles = makeStyles((theme) => ({
    imgcont:{
        width: '200px',
        height: '120px',
        marginBack: 2
      }
}))

const ShowImage = () => (
  <div className="product-img">
    <img
      src='/core/images/mesa.png'
      className={useStyles.imgcont}
      style={{maxHeight: "100px", maxWidth:"100px"}}/>
  </div>
)

export default ShowImage;