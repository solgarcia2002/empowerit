import React from "react";
import { Container,Nav, Navbar, NavDropdown, Button } from "react-bootstrap"; 
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
                     <Nav.Link as={Link} to= '/nosotros'>{t('nav-bar.us')}</Nav.Link>
                     <Nav.Link as={Link} to= '/trabajo'>{t('nav-bar.our-job')}</Nav.Link>
                     <NavDropdown title={t('nav-bar.services')} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Desafio</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Solucion</NavDropdown.Item>
                        <Dropdown className="d-inline mx-2" autoClose="outside">
                        <Button variant="outline-primary" as={Link} to= '/contacto'>{t('nav-bar.contact')}</Button>
                     </Dropdown>
                     </NavDropdown>
                     <Nav.Link as={Link} to= '/contacto'>{t('nav-bar.contact')}</Nav.Link> 
                     
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
