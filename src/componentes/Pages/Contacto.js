import React from 'react'
import { useTranslation} from "react-i18next";
import Formulario from '../Forms/Formulario';
import './Portada.css';




const Contacto = () => {
  const {t} = useTranslation (["global"]);
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?k=20&m=1321462048&s=612x612&w=0&h=lX-pTNbf8XkFJR6lObJFN9J953QP2QfrK-IbEeQeAt4='/>
        </div>
        
        <h1 className="titulo-portada">{t("contact.title")}</h1>
        <div className="cont-texto">
          <p className="texto">{t("contact.text")} </p>
        </div>
        
        <Formulario/>
      </div>
    
  )
}
export default Contacto;


