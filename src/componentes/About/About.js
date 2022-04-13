import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
           <h3> Dejame decirte algo sobre nosotras </h3>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui necessitatibus voluptatibus eius soluta, quod quaerat dolore quibusdam. Laudantium minima ipsum reiciendis ratione culpa quae, ab, et maiores nesciunt vitae deleniti?</p>
        </div>
        <div className='about-img'>
           <img src='https://media.istockphoto.com/photos/group-of-businesswomen-collaborating-in-creative-meeting-around-table-picture-id1279113943?k=20&m=1279113943&s=612x612&w=0&h=-4qUq7x5tO_ubIOgzD45Na4lFoc7po_29Fc523QQJdw=' alt='about'/>
        </div>
    </div>
  )
}

export default About