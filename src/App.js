import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownB from './componentes/DropdownB';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';
import About from './componentes/About/About';

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
           <div>
             <Covers/>
             <About/>
           </div>
     </div >
  );
}




export default App;
