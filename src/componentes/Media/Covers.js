import React from 'react';
import CoverVideo from './coverVideo.mp4';
import './Coverr.css';
import {Button} from 'react-bootstrap';


const Covers = () => {

  return (
    <div className='cover-container'>
        <video className='video'src={CoverVideo} autoPlay loop muted/>
         <h1> Empowerit</h1>  
         <p> "La tecnología es mejor cuando junta a las personas" </p>
         
         <Button variant="light">Ver mas</Button> 
    </div>
  )
}

export default Covers