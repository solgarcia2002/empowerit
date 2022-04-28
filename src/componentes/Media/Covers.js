import React from 'react';
import CoverVideo from './coverVideo.mp4';
import Fondo from '../imagenes/Empowerit-logo.png';
import './Coverr.css';
import {Button} from 'react-bootstrap';


const Covers = () => {

  return (
    <div className='cover-container'>
      <video className='d-none d-md-block .d-lg-none video'src={CoverVideo} autoPlay loop muted/>
      
      <img className=	'.d-none .d-lg-none .d-md-none img'  src ={Fondo} alt='fondo'/>
      <h1 className='d-none d-md-block .d-lg-none h1'> Empowerit</h1>  
      <p> "La tecnología es mejor cuando junta a las personas" </p>
      
      
      <button className='btn-main hover-filled-slide-up'>
        <span>Ver más</span>
      </button>
    </div>
  )
}

export default Covers