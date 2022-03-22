import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import NavbarComp from './componentes/Navbar';

function App() {
  return (

     <div className='App'>
       <NavbarComp/> 
        <div>
         <Header/>
          <h1> Hola!!!</h1>
        </div>
     </div >
  );
}

export default App;
