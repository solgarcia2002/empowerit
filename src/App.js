import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/Navbar';
import './App.css';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import AboutUs from './componentes/Pages/AboutUs';
import Home from './componentes/Pages/Home';
import Inversores from './componentes/Pages/Inversores';
import Servicios from './componentes/Pages/Servicios';
import Trabajo from './componentes/Pages/Trabajo';


function App() {
  return (  

     <div className='App'>

       <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavbarComp/>}>
              <Route path='Home' element={ <Home/> }/>
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




export default App;
