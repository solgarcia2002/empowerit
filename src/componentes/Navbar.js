import React from "react";
import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap"; 
import './Navbar.css';
import DropdownB from './DropdownB';
import {Outlet,Link,} from "react-router-dom";

 
 function NavbarComp () { 
       return (
         <>
         <Navbar bg="light" expand="lg">
           <Container className='contenido'>
             <Navbar.Brand as={Link} to= 'home' > Empowerit</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to= 'aboutUs'>Nosotros</Nav.Link>
                     <Nav.Link as={Link} to= 'trabajo'>Nuestro Trabajo</Nav.Link>
                     <NavDropdown title="Nuestros Servicios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Opcion A</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Opcion B</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Opcion C</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Otras Opciones</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link as={Link} to= 'inversores'>Inversores</Nav.Link> 
                     
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
