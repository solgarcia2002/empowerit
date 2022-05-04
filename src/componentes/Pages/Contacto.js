import React from 'react'
import { useTranslation} from "react-i18next";
import Formulario from '..Forms/Formulario.js';
import './Portada.css';




const Contacto = () => {
  const {t} = useTranslation ();
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?k=20&m=1321462048&s=612x612&w=0&h=lX-pTNbf8XkFJR6lObJFN9J953QP2QfrK-IbEeQeAt4='/>
        </div>
        
        <h1 className="titulo-portada">Contacto</h1>
        <div className="cont-texto">
          <p className="texto">Ponemos a tus pies la ingeniería, la innovación y el diseño para elaborar productos únicos que harán que te distingas en el mercado.</p>
        </div>
        <button className='btn-main hover-filled-slide-up'>
        <span>Contactanos</span>
      </button>
        <Formulario/>
      </div>
    
  )
}
export default Contacto;


