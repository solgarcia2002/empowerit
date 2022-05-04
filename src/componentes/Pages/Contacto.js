import React from 'react'
import { useTranslation} from "react-i18next";
import './Contacto.css'
import Formulario from '../Forms/Formulario';


const Contacto = () => {
  const {t} = useTranslation ();
  return(

    <div className="cont-todoContact">
       <div className='cont-imgContact'>
           <img className='contPortada' src= 'https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?k=20&m=1321462048&s=612x612&w=0&h=lX-pTNbf8XkFJR6lObJFN9J953QP2QfrK-IbEeQeAt4='/>

          <div className="cont-textoContact">
               <h1 className="titulo-portadaContact">Contactanos</h1>
               <p className="textoContact">Ponemos a tus pies la ingeniería, la innovación y el diseño para elaborar productos únicos que harán que te distingas en el mercado.</p>
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


