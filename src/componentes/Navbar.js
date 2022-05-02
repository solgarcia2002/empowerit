import React from "react";
import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap"; 
import './Navbar.css';
import DropdownB from './DropdownB';
import {Outlet,Link,} from "react-router-dom";
import { Dropdown} from "react-bootstrap"

import { useTranslation } from "react-i18next";

 
 function NavbarComp () { 
   const {t, i18n} = useTranslation(["global"]);
       return (
         <>
         <Navbar bg="light" expand="lg">
           <Container className='contenido'>
             <Navbar.Brand as={Link} to= 'home' > Empowerit</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to= '/nosotros'>{t('nav-bar.nosotros')}</Nav.Link>
                     <Nav.Link as={Link} to= '/trabajo'>{t('nav-bar.our-job')}</Nav.Link>
                     <NavDropdown title={t('nav-bar.services')} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Desafio</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Solucion</NavDropdown.Item>
                        <Dropdown className="d-inline mx-2" autoClose="outside">
                        <Dropdown.Toggle id="dropdown-autoclose-outside">
                           Contactanos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item rel='noreferrer'href="https://gmail.com" class="me-4 text-reset"><i class="bi bi-envelope"></i></Dropdown.Item>
                           <Dropdown.Item rel='noreferrer'href="https://whatsapp"  class="me-4 text-reset"><i class="bi bi-whatsapp"></i></Dropdown.Item>
                           <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
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
