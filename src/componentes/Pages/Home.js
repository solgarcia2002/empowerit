import React from 'react'
import Covers from '../Media/Covers';
import About from '../About/About';
import Services from '../Services/Services';
import ControlledCarousel from '../Carousels/Carousels';
import './Portada.css';
import gif from '../imagenes/GIF.gif';

const Home = () => {
  function cerrar() {
    document.getElementById('gif').style.display = 'none';
    
  }
  
    return (
      
    <div>
      <div id='gif' className='cont-gif' style={{ display: 'block'}}  onMouseOver={setTimeout(cerrar, 3000)}>
        <img src={gif} className='gif'  alt='Gif'  />
      </div>
      
      <Covers/>
      <About/>
      <Services/>
      <ControlledCarousel/>
        
    </div>
  )
}

export default Home;