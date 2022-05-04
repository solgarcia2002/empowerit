import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc1'>
           <h3> Dejame decirte algo sobre nosotros </h3>
           <p>Somos quienes te impulsaran al éxito empoderando tu transformación digital.
La solución a tus necesidades digitales es nuestra especialidad y acompañarte al éxito es nuestra meta.</p>
        </div>
        <div className='about-img1'>
           <img src='https://media.istockphoto.com/photos/group-of-businesswomen-collaborating-in-creative-meeting-around-table-picture-id1279113943?k=20&m=1279113943&s=612x612&w=0&h=-4qUq7x5tO_ubIOgzD45Na4lFoc7po_29Fc523QQJdw=' alt='about'/>
        </div>
    </div>
  )
}

export default About