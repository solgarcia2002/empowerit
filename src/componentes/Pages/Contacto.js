import React from 'react'
import { useTranslation} from "react-i18next";
import './Contacto.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



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
          
            <p className='phone'>
            <i class="fa-solid fa-phone"></i> &nbsp;
                +54 3514061578
              {/* <span className='imgCont1'>
              </span>
              < a className='link' href='+543514061578'>+543514061578</a> */}
            </p>
            
            <p className='email'><i class="fa-solid fa-envelope"></i> &nbsp; info@empowerit.io
              {/* <span className='imgCont2'>
              </span>
              < a className='link' href='info@empowerit.io'>info@empowerit.io</a> */}
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


