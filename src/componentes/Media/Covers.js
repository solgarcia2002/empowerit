import React from 'react';
import CoverVideo from './coverVideo.mp4';
import Poster from './poster.jpg';
import Fondo from '../imagenes/Empowerit-logo.png';
import './Coverr.css';
import { useTranslation } from "react-i18next";




const Covers = () => {
  const {t, i18n} = useTranslation(["global"]);

    return (
      <div className='cover-container'>
        <video className='d-none d-md-block .d-lg-none video' src={'https://empowerit-assets.s3.amazonaws.com/coverVideo.mp4'} autoPlay loop muted poster={Poster}/>
        
        <img className=	'.d-none .d-lg-none .d-md-none img'  src={Fondo} alt='fondo'/>
        <h1 className='d-none d-md-block .d-lg-none h1'>EMPOWERIT</h1>  
        <p> {t("cover.text")} </p>
        
        
        <button className='btn-main hover-filled-slide-up'>
          <span>{t("cover.button")}</span>
        </button>
      </div>
    )
}

export default Covers