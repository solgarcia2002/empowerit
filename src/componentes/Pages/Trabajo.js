import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';

const Trabajo = () => {
  const {t} = useTranslation ();
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921293_960_720.jpg'/>
        </div>
        
        <h1 className="titulo-portada">Nuestro Trabajo</h1>
        <div className="cont-texto">
          <p className="texto">Trabajamos en tus proyectos con un equipo de profesionales que le brindará solucion a tus necesidades tecnológicas. Evaluamos la mejor solución para aumentar sus ventas, comprometidos para hacer que ustedes y sus productos se destaquen  en el mercado. Somos los socios de tu próximo éxito con tecnología de última generación.</p>
        </div>
      </div>
  )
}

export default Trabajo