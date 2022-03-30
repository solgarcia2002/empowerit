import React from 'react';
import CoverVideo from '../../componentes/Media/coverVideo.mp4';

const Covers = () => {
  return (
    <div className='cover-container'>
        <video className='video'src={CoverVideo} autoPlay loop muted/>
    </div>
  )
}

export default Covers