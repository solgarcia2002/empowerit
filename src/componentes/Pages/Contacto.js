import React from 'react'
import { useTranslation} from "react-i18next";
import Formulario from '../Forms/Formulario';
import './Contacto.css';




const Contacto = () => {
  const {t} = useTranslation ();
    return (
      <div className="cont-todo">
        <div className='cont-imgContacto'>
              
          <img className='portada' src='https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?k=20&m=1321462048&s=612x612&w=0&h=lX-pTNbf8XkFJR6lObJFN9J953QP2QfrK-IbEeQeAt4='/>
          <h1 className="titulo-portada">Contactanos</h1>
              <div classname="icons">
               
                  <i class="bi bi-envelope">empowerit@gmail.com</i>
              
                  <i class="bi bi-telephone-inbound">+5435122065258</i>
               
              </div>
        </div>
        
        
        
        <button className='btn-main hover-filled-slide-up'>
        <span>Contactanos</span>
      </button>
        <Formulario/>
      </div>
    
  )
}
export default Contacto;


