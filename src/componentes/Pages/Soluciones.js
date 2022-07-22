import React from 'react'
import { useTranslation} from "react-i18next";
import './Soluciones.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Soluciones ()  {
  const {t} = useTranslation (["global"]);
    
  return(

    <div className="cont-todo">
      <Helmet>
        <title>Empowerit | {t("nav-bar.solutions")}</title>
            
      </Helmet>

       <div className='cont-titulo ' >
          <h2 className="titulo-solutions text-center">{t("solutions.title")}</h2>
       </div>
        
        <div className='cont-primero'>
          <div className='circulo1 hover-filled-slide'>
            <h4 className='title-ball'>Web and mobile development</h4>
          </div>
          <div className='cont-desarrollo'>
            <h3 className='title-content'>{t("solutions.ball-1-title")}</h3>
            <p>{t("solutions.ball-1-content")}</p>
          </div>
        </div>
        
        <div className='cont-primero'>
          <div className='circulo2'>
            <h4 className='title-ball2'>UX / UI DESIGN</h4>

          </div>
          <div className='cont-desarrollo'>
            <h3 className='title-content'>{t("solutions.ball-2-title")}</h3>
            <p > {t("solutions.ball-2-content")}</p>
          </div>
        </div>
        <div className='cont-primero'>
          <div className='circulo3'>
          <h4 className='title-ball'>Corporate website, eCommerce, landingpage</h4>
          </div>
          <div className='cont-desarrollo'>
            <h3 className='title-content'>{t("solutions.ball-3-title")}</h3>
            <p>{t("solutions.ball-3-content")}</p>
          </div>
        </div>
       
        <div className='cont-button-s'>
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