import React, {Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import './App.css';
import { BrowserRouter, Route,Routes,} from "react-router-dom";
import Home from './componentes/Pages/Home';
import Contacto from './componentes/Pages/Contacto';
import Desafio from './componentes/Pages/Desafio';
import Trabajo from './componentes/Pages/Trabajo';
import Unete from './componentes/Pages/Unete';
import Soluciones from './componentes/Pages/Soluciones';
import Footer from './componentes/Footer/Footer';
import { useTranslation } from "react-i18next";
import Formulario from './componentes/Forms/Formulario';



function Pass() {
  const {t, i18n} = useTranslation(["global"]);

  return (

     <div className='App'>
<<<<<<< HEAD

       <BrowserRouter>
        <NavbarComp/>
          <Routes>
            
            <Route path='/' element={ <Home/> }/>
              <Route path='/desafio' element={ <Desafio/> }/>
              <Route path='/soluciones' element={ <Soluciones/> }/>
              <Route path='/our-job' element={ <Trabajo/> }/>
              <Route path='/unete' element={ <Unete/> }/>
              <Route path='/contacto' element={ <Contacto/> }/>
              <Route path='/formulario' element={ <Formulario/> }/>
          </Routes>
        </BrowserRouter>
          
        
        <div> <Footer/></div>           
=======
       <NavbarComp/> 
        <div>
         <DropdownB/>
          <h1> Hola Mundo</h1>
        </div>
           <div>
             <Covers/>
           </div>
>>>>>>> b35ff579151374a6329da2777f4ec794bc5d5abc
     </div >
  );
}

function App() {
 return(
   <Suspense fallback='Cargando...'>
     <Pass/>
   </Suspense>
 )}


export default App;
