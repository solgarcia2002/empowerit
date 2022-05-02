import React from 'react'
import { useTranslation} from "react-i18next";
import {Container, Dropdown, DropdownButton} from "react-bootstrap"


export default function DropdownB () {
  const [t, i18n]= useTranslation ("global");

    return ( 
        <div className='idioma'>
           <Container expand="lg" bg = 'dark' >
            <DropdownButton id="dropdown-basic-button" title="Idioma" >
              <Dropdown.Item onClick={() => i18n.changeLanguage("es")}>Español </Dropdown.Item>
              <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>Ingles </Dropdown.Item>
            </DropdownButton>
           </Container>
        </div>
    )
} 