import React from 'react'
import '../Services/Services.css'
import { useTranslation } from "react-i18next";
import services from '../imagenes/solutions.jpg'

const Services = () => {
  const {t} = useTranslation(["global"]);
  return (
    <div className='services-container'>
        <div className='services-img1'>
           <img src={services} alt='' width={412}/>
        </div>
        <div className='services-desc1'>
           <h3 className='text-center'> {t("services.title")} </h3>
           <p> {t("services.text")}</p>
           <p>
            <a href="/soluciones">{t("services.link-info")}</a>
          </p>
        </div>
        
    </div>
  )
}

export default Services;