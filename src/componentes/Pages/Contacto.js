import React from 'react'
import { useTranslation} from "react-i18next";
import {Form} from '../Forms/Form';
import './Portada.css';




const Contacto = () => {
  const {t} = useTranslation ();
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?b=1&k=20&m=1168945108&s=170667a&w=0&h=vuUT6Qw8h-eRIHQEesB0_fC1V1xgQtPdWp4KyaVXq0M='/>
        </div>
        
        <h1 className="titulo-portada">Contacto</h1>
        <div className="cont-texto">
          <p className="texto"></p>
        </div>
        <Form/>
      </div>
    
  )
}

export default Contacto;


