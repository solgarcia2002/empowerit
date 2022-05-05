import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';

const Trabajo = () => {
  const {t} = useTranslation (["global"]);
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://cdn.pixabay.com/photo/2021/09/08/05/38/communication-6605646__340.jpg'/>
        </div>
        
        <h1 className="titulo-portada ">{t("our-job.title")}</h1>
        <div className="cont-texto">
          <p className="texto">{t("our-job.text")}</p>
        </div>
      </div>
  )
}

export default Trabajo