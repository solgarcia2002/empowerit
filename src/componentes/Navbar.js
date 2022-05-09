import React from "react";
import { Container,Nav, Navbar, NavDropdown,  } from "react-bootstrap"; 
import './Navbar.css';
import DropdownB from './DropdownB';
import {Outlet,Link,} from "react-router-dom";
import { useState } from "react";
import Logo from './imagenes/Empowerit.png';
import { useTranslation } from "react-i18next";

 
 function NavbarComp () { 
   const {t, i18n} = useTranslation(["global"]);
   const [expanded, setExpanded] = useState(false);

    const navToggle = () => {
        setExpanded(expanded ? false : true);
    };

    const closeNav = () => {
        setExpanded(false);
    };
   
   return (
         <>
          <Navbar bg="light" expand="lg" expanded={expanded}>
           <Container className='contenido'>
             <Navbar.Brand  id='empowerit' as={Link} to= '/'  onClick={closeNav}>
               <img
                  src={Logo}
                  width="120"
                  height="auto"
                  className="d-inline-block align-top"
                  alt="empowerit-logo"
               />
             </Navbar.Brand>
             
              <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={navToggle}/>
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <NavDropdown title={t("nav-bar.services")} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to= '/desafio' onClick={closeNav}>{t("nav-bar.challenge")}</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= '/soluciones' onClick={closeNav}>{t("nav-bar.solutions")}</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to= '/contacto' onClick={closeNav}>{t("nav-bar.contact-us")}</NavDropdown.Item>
                     </NavDropdown>

                     <Nav.Link as={Link} to= '/our-job' onClick={closeNav}>{t('nav-bar.our-job')}</Nav.Link>
                     <Nav.Link as={Link} to= '/unete' onClick={closeNav}>{t("nav-bar.follow")}</Nav.Link>
                     <Nav.Link as={Link} to= '/contacto' onClick={closeNav}>{t("nav-bar.contact")}</Nav.Link> 
                  
                     
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
