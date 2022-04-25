import React, from "react";
import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap"; 
import './Navbar.css';
 import DropdownB from './DropdownB';
 import { useTranslation} from "react-i18next";
 

export default function NavbarComp () {
  const [t, i18n]= useTranslation ("global");
       return (
         <Navbar bg="light" expand="lg">
           <Container className='contenido'>
             <Navbar.Brand href="#home">Empowerit</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">{t("nav-bar.about")}</Nav.Link>
                     <Nav.Link href="#link">{t("nav-bar.our-job")}</Nav.Link>
                     <NavDropdown title={t("nav-bar.services")} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Opcion A</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Opcion B</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Opcion C</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Otras Opciones</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#link">{t("nav-bar.investors")}</Nav.Link>
                 </Nav>
                <DropdownB/>
               </Navbar.Collapse>
              
           </Container>
         </Navbar>
       );
   
}
