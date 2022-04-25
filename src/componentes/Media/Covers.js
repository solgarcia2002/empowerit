import React from 'react';
import CoverVideo from './coverVideo.mp4';
import './Coverr.css';
import {Button} from 'react-bootstrap';


const Covers = () => {

  return (
    <div className='cover-container'>
      <video className='d-none d-md-block .d-lg-none video'src={CoverVideo} autoPlay loop muted/>
      
      <img className=	'.d-none .d-lg-none .d-md-none imagen'  src ='https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg' alt='fondo'/>
      <h1 className='Empowerit'> Empowerit</h1>  
      <p> "La tecnología es mejor cuando junta a las personas" </p>
      
      <Button variant="light">Ver mas</Button> 
    </div>
  )
}

export default Covers