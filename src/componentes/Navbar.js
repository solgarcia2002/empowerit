import React from "react";
import { Container,Nav, Navbar, NavDropdown,  } from "react-bootstrap"; 
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
                     <NavDropdown title={t("nav-bar.services")} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to= '/desafio'>{t("nav-bar.challenge")}</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= '/soluciones'>{t("nav-bar.solutions")}</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= '/contacto'>{t("nav-bar.contact-us")}</NavDropdown.Item>
                     </NavDropdown>

                     <Nav.Link as={Link} to= '/our-job'>{t('nav-bar.our-job')}</Nav.Link>
                     <Nav.Link as={Link} to= '/unete'>{t("nav-bar.follow")}</Nav.Link>
                     <Nav.Link as={Link} to= '/contacto'>{t("nav-bar.contact")}</Nav.Link> 
                  
                     
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
