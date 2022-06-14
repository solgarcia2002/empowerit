import React from 'react'
import './About.css';
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation(["global"]);
  return (
    <div className='about-container'>
        <div className='about-desc1'>
           <h3> {t("about.title")} </h3>
           <p>{t("about.text")}</p>
        </div>
        <div className='about-img1'>
           <img src='https://media.istockphoto.com/photos/group-of-businesswomen-collaborating-in-creative-meeting-around-table-picture-id1279113943?k=20&m=1279113943&s=612x612&w=0&h=-4qUq7x5tO_ubIOgzD45Na4lFoc7po_29Fc523QQJdw=' alt=''/>
        </div>
    </div>
  )
}

export default About