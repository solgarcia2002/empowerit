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
import Formulario from './componentes/Forms/Formulario';
import {MyProvider} from './shopContext.js'
import Tienda from './wooCommerce/Tienda.js'
import Product from './wooCommerce/Product/Product.js'



function Pass() {
  
  

  return (

     <div className='App'>
       <MyProvider>

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
                <Route path='/tienda' element={ <Tienda/> }/>
                <Route path='/product/:id' element={ <Product/> }/>



            </Routes>
          </BrowserRouter>
        </MyProvider>
        
        <div> <Footer/></div>           
     </div >
  );
}

function App() {
 return(
   <Suspense fallback=''>
     <Pass/>
   </Suspense>
 )}


export default App;
