import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';

const Trabajo = () => {
  const {t} = useTranslation ();
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://cdn.pixabay.com/photo/2021/09/08/05/38/communication-6605646__340.jpg'/>
        </div>
        
        <h1 className="titulo-portada ">Nuestro Trabajo</h1>
        <div className="cont-texto">
          <p className="texto">Trabajamos en tus proyectos con un equipo de profesionales que le brindará solución a tus necesidades tecnológicas. Evaluamos la mejor solución para aumentar sus ventas, comprometidos para hacer que ustedes y sus productos se destaquen  en el mercado. Somos los socios de tu próximo éxito con tecnología de última generación.</p>
        </div>
      </div>
  )
}

export default Trabajo