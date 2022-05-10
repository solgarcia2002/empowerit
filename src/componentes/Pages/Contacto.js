import React from 'react'
import { useTranslation} from "react-i18next";
import './Contacto.css';
import { Link } from 'react-router-dom';



const Contacto = () => {
  const {t} = useTranslation (["global"]);
    return (
        <div className="cont-cont">
          <div className='cont-imgContacto'>
               <img className='portadaContacto' src='https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?k=20&m=1321462048&s=612x612&w=0&h=lX-pTNbf8XkFJR6lObJFN9J953QP2QfrK-IbEeQeAt4='/>
                  <h2 className="titulo-portada">{t("contact.title")}</h2>
                     <div className='cont-textoContact'>
                              <p className='phone'>
                                <span className='imgCont1'>
                                  <img className='phone-icon' src='https://cdn.icon-icons.com/icons2/614/PNG/512/phone-call-auricular-symbol-in-black_icon-icons.com_56483.png' width={'30vw'}/>
                                </span>
                                  < a className='link' href='+543514061578'>+543514061578</a>
                              </p>
                              <p className='email'>
                                  <span className='imgCont2'>
                                    <img className='phone-icon' src='http://assets.stickpng.com/thumbs/584856b4e0bb315b0f7675ac.png' width={'50vw'}/>
                                  </span>
                                  < a className='link' href='info@empowerit.com'>info@empowerit.com</a>
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
        </div>
  )
}
export default Contacto;


