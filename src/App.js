import React, {Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import Covers from "./componentes/Media/Covers";
import './App.css';
import About from './componentes/About/About';
import Services from './componentes/Services/Services';
import ControlledCarousel from './componentes/Carousels/Carousels';
import Msj from './componentes/Msj/Msj';
import Footer from './componentes/Footer/Footer';


import { useTranslation } from "react-i18next";


function Pass() {
  const {t, i18n} = useTranslation(["global"]);

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

function App() {
 return(
   <Suspense fallback='Cargando...'>
     <Pass/>
   </Suspense>
 )}


export default App;
