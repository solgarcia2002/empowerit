import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownB from './componentes/DropdownB';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';



function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
        <div>
         <DropdownB/>
          
        </div>
           <div>
             <Covers/>
           </div>
     </div >
  );
}




export default App;
