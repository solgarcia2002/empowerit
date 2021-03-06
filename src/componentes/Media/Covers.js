import React from 'react';
import Poster from './poster.jpg';
import './Coverr.css';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';




const Covers = () => {
  const {t} = useTranslation(["global"]);

    return (
      <div className='cover-container'>
        <video className='d-none d-md-block .d-lg-none video' src={'https://empowerit-assets.s3.amazonaws.com/coverVideo.mp4'} autoPlay loop muted poster={Poster}/>
        
        <img className=	'.d-none .d-lg-none .d-md-none img' alt=''  src={Poster} />
        <h1 className='d-none d-md-block .d-lg-none h1'>EMPOWERIT</h1>  
        <h2> {t("cover.text")} </h2>
        
        
        <button className='btn-main hover-filled-slide-up'>
        <Link to='/our-job'>
          <span>{t("cover.button")}</span>
        </Link>
        </button>
      </div>
    )
}

export default Covers