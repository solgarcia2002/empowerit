import React from 'react'
import { useTranslation} from "react-i18next";
import './Desafio.css';

function Desafio ()  {
  const {t} = useTranslation ();
    return(

      <div className="cont-todo">
         <div className='cont-img'>
             <img className='desafPortada' src= 'https://media.istockphoto.com/photos/businessman-checking-digital-data-by-virtual-reality-picture-id1137071808?k=20&m=1137071808&s=612x612&w=0&h=OmNg805KjezdlgR-hEdpYOBp6J8L1pj9KgbhgObu4-w='/>
             
         </div>  
          <div className="cont-texto">
                 <h1 className="titulo-portada">Nuestro Desafio</h1>
                 <p className="texto">Te ofrecemos un equipo de trabajo sólido e innovador a tu disposición que te brindará conocimientos que harán que tus ideas innoven en el mundo.</p>
          </div>
         
        <button className='btn-main hover-filled-slide-up'>
          <span>Contactanos</span>
        </button>

      </div> 
  )
}

export default Desafio;