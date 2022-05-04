import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';
function Soluciones ()  {
  const {t} = useTranslation ();
    
  return(

    <div className="cont-todo">
       <div className='cont-img'>
           <img className='portada' src= 'https://media.istockphoto.com/photos/making-an-informed-decision-picture-id1278923772?k=20&m=1278923772&s=612x612&w=0&h=icEEl7qC5sL_57aZH7msLayd9oMloLI8LAiNdAYN7kc='/>
           
       </div>  
        <div className="cont-texto">
               <h1 className="titulo-portada">Nuestro Servicio</h1>
               <p className="texto">Ponemos a tus pies la ingeniería, la innovación y el diseño para elaborar productos únicos que harán que te distingas en el mercado.</p>
        </div>
       
      <button className='btn-main hover-filled-slide-up'>
        <span>Contactanos</span>
      </button>

    </div> 
)
}
export default Soluciones;