import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownB from './componentes/DropdownB';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';
import About from './componentes/About/About';
import Services from './componentes/Services/Services';
import ControlledCarousel from './componentes/Carousels/Carousels';

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
           <div>
             <Covers/>
             <About/>
             <Services/>
             <ControlledCarousel/>
           </div>
     </div >
  );
}




export default App;
