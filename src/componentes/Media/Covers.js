import React from 'react';
import CoverVideo from './coverVideo.mp4';
import Fondo from '../imagenes/Empowerit-logo.png';
import './Coverr.css';
import { useTranslation } from "react-i18next";



const Covers = () => {
  const {t, i18n} = useTranslation(["global"]);

    return (
      <div className='cover-container'>
        <video className='d-none d-md-block .d-lg-none video'src={CoverVideo} autoPlay loop muted/>
        
        <img className=	'.d-none .d-lg-none .d-md-none img'  src ={Fondo} alt='fondo'/>
        <h1 className='d-none d-md-block .d-lg-none h1'>EMPOWERIT</h1>  
        <p> {t("cover.text")} </p>
        
        
        <button className='btn-main hover-filled-slide-up'>
          <span>Ver más</span>
        </button>
      </div>
    )
}

export default Covers