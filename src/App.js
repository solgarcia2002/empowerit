import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';
import About from './componentes/About/About';
<<<<<<< Updated upstream
import Services from './componentes/Services/Services';
import ControlledCarousel from './componentes/Carousels/Carousels';
=======
import ControlledCarousel from './componentes/Carousel/Carousel';
>>>>>>> Stashed changes

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
           <div>
             <Covers/>
             <About/>
<<<<<<< Updated upstream
             <Services/>
=======
>>>>>>> Stashed changes
             <ControlledCarousel/>
           </div>
     </div >
  );
}




export default App;
