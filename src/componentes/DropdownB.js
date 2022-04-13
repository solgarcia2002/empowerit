import React from 'react'
import { useTranslation} from "react-i18next";
<<<<<<< HEAD
import {Container, Dropdown, DropdownButton} from "react-bootstrap"


=======
import {Dropdown, DropdownButton} from 'react-bootstrap';
>>>>>>> fea27e8a3d75f6a83361792a6a732e8b76197caa
 export default function DropdownB () {
    const [t, i18n]= useTranslation ("global");

    return ( 
        <div className='idioma'>
           <Container expand="lg">
            <DropdownButton id="dropdown-basic-button" title="Idioma">
              <Dropdown.Item onClick={() => i18n.changeLanguage("es")}>Español </Dropdown.Item>
              <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>Ingles </Dropdown.Item>
            </DropdownButton>
           </Container>
        </div>
    )
}