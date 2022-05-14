import React from 'react'
import Covers from '../Media/Covers';
import About from '../About/About';
import Services from '../Services/Services';
import ControlledCarousel from '../Carousels/Carousels';

const Home = () => {
  
    return (
    <div>
      <Covers/>
      <About/>
      <Services/>
      <ControlledCarousel/>
        
    </div>
  )
}

export default Home;