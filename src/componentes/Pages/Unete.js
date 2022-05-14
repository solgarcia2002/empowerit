import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
import { Link } from 'react-router-dom';


function Unete ()  {
  const {t} = useTranslation (["global"]);
  return(

    <div className="cont-todo">
       <div className='cont-img'>
           <img className='portada' alt='portada-unete' src= 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'/>
           
       </div>  
        <div className="cont-texto">
               <h1 className="titulo-portada">{t("join-up.title")}</h1>
               <p className="texto">{t("join-up.text")}</p>
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

export default Unete;