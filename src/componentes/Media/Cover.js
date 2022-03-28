import React from 'react'
import "./cover.css";
import CoverVideo from "./componentes/media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={CoverVideo} autoPlay loop muted/>
    </div>
  )
}

export default Cover