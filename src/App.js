import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from './componentes/dropdownButton';
import NavbarComp from './componentes/Navbar';
import Cover from "./componentes/Media/Cover";
import CoverVideo from "./componentes/Media/CoverVideo.mp4";

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
        <div>
         <DropdownButton/>
          <h1> Hola!!!</h1>
        </div>
           <div>
             <Cover/>
           </div>
     </div >
  );
}




export default App;
