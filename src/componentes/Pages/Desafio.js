import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Desafio ()  {
  const {t} = useTranslation (["global"]);
    return(

      <div className="cont-todo">
        <Helmet>
          <title>Empowerit | {t("nav-bar.challenge")}</title>
            
        </Helmet>
         <div className='cont-img'>
             <img className='portada' alt='portada-desafio' src= 'https://media.istockphoto.com/photos/businessman-checking-digital-data-by-virtual-reality-picture-id1137071808?k=20&m=1137071808&s=612x612&w=0&h=OmNg805KjezdlgR-hEdpYOBp6J8L1pj9KgbhgObu4-w='/>
             
         </div>  
         <div className='cont-titulo1' >
            <h2 className="titulo-portada text-center">{t("challenge.title")}</h2>
          </div>
          <div className="cont-texto">
            <p className="texto">{t("challenge.text")}</p>
          </div>
          <div className='cont-button'>
            <button  className='btn-main hover-filled-slide-up '>
              <Link to="/contacto">
                <span> {t("contact-button")} </span>
              </Link>
            </button>
          </div>


      </div> 
  )
}

export default Desafio;