import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
import { Helmet } from 'react-helmet';

const Trabajo = () => {
  const {t} = useTranslation (["global"]);
    return (
      <div className="cont-todo">
        <Helmet>
            <title>Empowerit | {t("nav-bar.our-job")}</title>
            
        </Helmet>
        <div className='cont-img'>
              
          <img className='portada' alt='portada-trabajo' src='https://cdn.pixabay.com/photo/2021/09/08/05/38/communication-6605646__340.jpg'/>
        </div>
        <div className='cont-titulo1' >
            <h2 className="titulo-portada text-center">{t("our-job.title")}</h2>
        </div>
        <div className="cont-texto">
          <p className="texto">{t("our-job.text")}</p>
        </div>
      </div>
  )
}

export default Trabajo