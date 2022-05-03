import React from "react";
import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap"; 
import './Navbar.css';
import DropdownB from './DropdownB';
import {Outlet,Link,} from "react-router-dom";
import { Dropdown} from "react-bootstrap"
import Logo from './imagenes/Empowerit.png';
import { useTranslation } from "react-i18next";

 
 function NavbarComp () { 
   const {t, i18n} = useTranslation(["global"]);
       return (
         <>
         <Navbar bg="light" expand="lg">
           <Container className='contenido'>
             <Navbar.Brand  id='empowerit' as={Link} to= '/' >
               <img
                  src={Logo}
                  width="120"
                  height="auto"
                  className="d-inline-block align-top"
                  alt="empowerit-logo"
               />
             </Navbar.Brand>
             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <NavDropdown title='Nuestros Servicios' id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to= '/desafio'>Desafio</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= '/soluciones'>Soluciones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= '/contacto'>Contactanos</NavDropdown.Item>
                     </NavDropdown>

                     <Nav.Link as={Link} to= '/our-job'>{t('nav-bar.our-job')}</Nav.Link>
                     <Nav.Link as={Link} to= '/unete'>Unete a Nosotros</Nav.Link>
                     <Nav.Link as={Link} to= '/contacto'>Contacto</Nav.Link> 
                     <Nav.Link as={Link} to= '/compromiso'>Compromiso</Nav.Link> 
                     
                  </Nav>
               <DropdownB/>

               </Navbar.Collapse>
              
            </Container>
         </Navbar> 
            <section>
                <Outlet></Outlet>
            </section>
         </>
       );
    };

    export default NavbarComp;
