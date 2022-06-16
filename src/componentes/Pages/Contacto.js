import React from 'react'
import { useTranslation} from "react-i18next";
import './Contacto.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Mailto from '../mailTo';


const Contacto = () => {
  const {t} = useTranslation (["global"]);
    return (
        <div className="cont-cont">
          <Helmet>
            <title>Empowerit | {t("nav-bar.contact-us")}</title>
          </Helmet>
          <div className='cont-imgContacto'>
            <img className='portadaContacto' alt='portada' src='https://images.pexels.com/photos/5485885/pexels-photo-5485885.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
          </div>      
          
          <div className='cont-contact'>
            <h2 className="titulo-port">{t("contact.title")}</h2>
          </div>

          <div className='cont-textoContact'>
          <Mailto email="info@empowerit.io" subject="" body="">
            <p className='email'><i class="fa-solid fa-envelope"></i> &nbsp; info@empowerit.io</p>
          </Mailto>
            
          <p className='phone'>
            <i class="fa-solid fa-phone"></i> &nbsp;
                +54 3514061578
            </p>
            
            
              <div className='cont-buttonC'>
                <button  className='btn-main hover-filled-slide-up'>
                  <Link to="/formulario">
                    <span> {t("form-button")} </span>
                  </Link>
                </button>
              </div>
                            
          </div>
          
        </div>
  )
}
export default Contacto;


