import React, { Component } from "react";
import { Container,Nav, Navbar, NavDropdown } from "react-bootstrap"; 
import './Navbar.css';
 
import DropdownB from './DropdownB';
export default class NavbarComp extends Component { 
    render () {
       return (
         <Navbar bg="light" expand="lg">
           <Container className='contenido'>
             <Navbar.Brand href="#home">Empowerit</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Nosotros</Nav.Link>
                     <Nav.Link href="#link">Nuestro Trabajo</Nav.Link>
                     <NavDropdown title="Nuestros Servicios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Opcion A</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Opcion B</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Opcion C</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Otras Opciones</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#link">Inversores</Nav.Link> 
                     
                 </Nav>
                 <DropdownB/>
               </Navbar.Collapse>
           </Container>
         </Navbar>
       );
    };
}
