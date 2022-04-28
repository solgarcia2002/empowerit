import React from 'react'
import { useTranslation} from "react-i18next";
import {Container, Dropdown, DropdownButton} from "react-bootstrap"
import './DropdownB.css';


export default function DropdownB () {
  const [t, i18n]= useTranslation ("global");

    return ( 
        <div className='idioma'>
           <Container expand="lg">
            <DropdownButton id="dropdown-basic-button" title={t('lang-button.lang')}>
              <Dropdown.Item onClick={() => i18n.changeLanguage("es")}>{t('lang-button.es')} </Dropdown.Item>
              <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>{t('lang-button.en')} </Dropdown.Item>
            </DropdownButton>
           </Container>
        </div>
    )
} 