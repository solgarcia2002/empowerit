import React from 'react'
import '../Services/Services.css'
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t} = useTranslation(["global"]);
  return (
    <div className='services-container'>
        <div className='services-img1'>
           <img src='https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg' alt=''/>
        </div>
        <div className='services-desc1'>
           <h3> {t("services.title")} </h3>
           <p> {t("services.text")}</p>
        </div>
        
    </div>
  )
}

export default Services;