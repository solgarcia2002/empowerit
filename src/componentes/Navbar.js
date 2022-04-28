import React from "react";
import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap"; 
import './Navbar.css';
import DropdownB from './DropdownB';
import {Outlet,Link,} from "react-router-dom";
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
                     <Nav.Link as={Link} to= '/aboutUs'>{t('nav-bar.about')}</Nav.Link>
                     <Nav.Link as={Link} to= '/trabajo'>{t('nav-bar.our-job')}</Nav.Link>
                     <NavDropdown title={t('nav-bar.services')} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Opcion A</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Opcion B</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Opcion C</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Otras Opciones</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link as={Link} to= '/inversores'>{t('nav-bar.investors')}</Nav.Link> 
                     
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
