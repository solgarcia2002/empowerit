import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';
import About from './componentes/About/About';
import Services from './componentes/Services/Services';
<<<<<<< HEAD
import ControlledCarousel from './componentes/Carousels/Carousels';
import Msj from './componentes/Msj/Msj';
import Footer from './componentes/Footer/Footer';
=======
import ControlledCarousel from './componentes/Carousel/Carousel';
>>>>>>> 1350449348b0f34745b37acbd301310da56e9349

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
           <div>
             <Covers/>
             <About/>
             <Services/>
             <ControlledCarousel/>
             <Msj/>
             <Footer/>
           </div>  
     </div >
  );
}




export default App;
