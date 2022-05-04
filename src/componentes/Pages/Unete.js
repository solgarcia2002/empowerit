import React from 'react'
import { useTranslation} from "react-i18next";
import './Unete.css';

function Unete ()  {
  const {t} = useTranslation ();
  return(

    <div className="cont-todo">
       <div className='cont-img'>
           <img className='unetePortada' src= 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'/>
           
       </div>  
        <div className="cont-texto">
               <h1 className="titulo-portada">Unete a nosotros</h1>
               <p className="texto">Si quieres formar parte de un equipo de trabajó en el que se valore el ambiente laboral, el aprendizaje y superarnos día a día envíanos tu CV</p>
        </div>
       
      <button className='btn-main hover-filled-slide-up'>
        <span>Contactanos</span>
      </button>

    </div> 
)
}

export default Unete;