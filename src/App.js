import React, {Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import './App.css';
import { 
  BrowserRouter,
  Route,
  Routes,
  } from "react-router-dom";
import Home from './componentes/Pages/Home';
import Inversores from './componentes/Pages/Inversores';
import Servicios from './componentes/Pages/Servicios';
import Trabajo from './componentes/Pages/Trabajo';
import AboutUs from './componentes/Pages/AboutUs';
import Footer from './componentes/Footer/Footer';


import { useTranslation } from "react-i18next";


function Pass() {
  const {t, i18n} = useTranslation(["global"]);

  return (

     <div className='App'>

       <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavbarComp/>}>
              <Route path='home' element={ <Home/> }/>
              <Route path='aboutUs' element={ <AboutUs/> }/>
              <Route path='inversores' element={ <Inversores/> }/>
              <Route path='servicios' element={ <Servicios/> }/>
              <Route path='trabajo' element={ <Trabajo/> }/>
            </Route>
          </Routes>
        </BrowserRouter>
          
           
        <div> <Footer/></div>           
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
