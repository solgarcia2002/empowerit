import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
import { Link } from 'react-router-dom';
function Soluciones ()  {
  const {t} = useTranslation (["global"]);
    
  return(

    <div className="cont-todo">
       <div className='cont-img'>
           <img className='portada' alt='portada-soluciones' src= 'https://media.istockphoto.com/photos/making-an-informed-decision-picture-id1278923772?k=20&m=1278923772&s=612x612&w=0&h=icEEl7qC5sL_57aZH7msLayd9oMloLI8LAiNdAYN7kc='/>
           
       </div>  
        <div className="cont-texto">
               <h1 className="titulo-portada">{t("solutions.title")}</h1>
               <p className="texto">{t("solutions.text")}</p>
        </div>
       
        <div className='cont-button'>
            <button  className='btn-main hover-filled-slide-up '>
              <Link to="/contacto">
                <span>{t("contact-button")} </span>
              </Link>
            </button>
          </div>

    </div> 
)
}
export default Soluciones;