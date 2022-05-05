import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
import { Link } from 'react-router-dom';


function Unete ()  {
  const {t} = useTranslation ();
  return(

    <div className="cont-todo">
       <div className='cont-img'>
           <img className='portada' src= 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'/>
           
       </div>  
        <div className="cont-texto">
               <h1 className="titulo-portada">Unete a nosotros</h1>
               <p className="texto">Si quieres formar parte de un equipo de trabajo en el que se valore el ambiente laboral, el aprendizaje y superarnos día a día envíanos tu CV</p>
        </div>
        <div className='cont-button'>
          <button  className='btn-main hover-filled-slide-up '>
            <Link to="/contacto">
              <span> Contacto </span>
            </Link>
          </button>
        </div>

    </div> 
    
)
}

export default Unete;