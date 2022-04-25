import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';
import About from './componentes/About/About';
import Services from './componentes/Services/Services';
import ControlledCarousel from './componentes/Carousels/Carousels';
import Footer from './componentes/Footer/Footer';

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
           <div>
             <Covers/>
             <About/>
             <Services/>
             <ControlledCarousel/>
             <Footer/>
           </div>  
     </div >
  );
}




export default App;
