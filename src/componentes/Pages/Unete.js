import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Unete ()  {
  const {t} = useTranslation (["global"]);
  return(

    <div className="cont-todo">
      <Helmet>
        <title>Empowerit | {t("nav-bar.follow")}</title>
            
      </Helmet>
       <div className='cont-img'>
           <img className='portada' alt='portada-unete' src= 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'/>
           
       </div>  
       <div className='cont-titulo1' >
            <h2 className="titulo-portada text-center">{t("join-up.title")}</h2>
        </div>
        <div className="cont-texto">
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