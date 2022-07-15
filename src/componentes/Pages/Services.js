import React from 'react'
import { useTranslation} from "react-i18next";
import './Soluciones.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Services ()  {
  const {t} = useTranslation (["global"]);
    
  return(

    <div className="cont-todo">
      <Helmet>
        <title>Empowerit | {t("nav-bar.services")}</title>
            
      </Helmet>

       <div className='cont-titulo ' >
          <h2 className="titulo-solutions text-center">{t("serv.title")}</h2>
       </div>
        
        <div className='cont-primero'>
          <div className='circulo1 hover-filled-slide'>
            <h4 className='title-ball'>Applications development</h4>
          </div>
          <div className='cont-desarrollo'>
            <li>{t("serv.li1")}</li>
            <li>{t("serv.li2")}</li>
            <li>{t("serv.li3")}</li>
            <li>{t("serv.li4")}</li>
            <li>{t("serv.li5")}</li>
            <li>{t("serv.li6")}</li>
            <li>{t("serv.li7")}</li>
            <li>{t("serv.li8")}</li>
            <li>{t("serv.li9")}</li>
            <li>{t("serv.li10")}</li>
            <li>{t("serv.li11")}</li>

            
          </div>
        </div>
        
        <div className='cont-primero'>
          <div className='circulo2'>
            <h4 className='title-ball2-s'>SOLUTIONS DESIGN</h4>

          </div>
          <div className='cont-desarrollo'>
            <li>{t("serv.li12")}</li>
            <li>{t("serv.li13")}</li>
            <li>{t("serv.li14")}</li>
            <li>{t("serv.li15")}</li>
            <li>{t("serv.li16")}</li>
            <li>{t("serv.li17")}</li>
          </div>
        </div>
        <div className='cont-primero'>
          <div className='circulo3'>
          <h4 className='title-ball'>Administration and Maintenance</h4>
          </div>
          <div className='cont-desarrollo'>
            <li>{t("serv.li18")}</li>
            <li>{t("serv.li19")}</li>
            <li>{t("serv.li20")}</li>
            <li>{t("serv.li21")}</li>
            <li>{t("serv.li22")}</li>
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
export default Services;