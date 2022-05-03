import React from 'react'
import { useTranslation} from "react-i18next";
import './Portada.css';

const Trabajo = () => {
  const {t} = useTranslation ();
    return (
      <div className="cont-todo">
        <div className='cont-img'>
              
          <img className='portada' src='https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921293_960_720.jpg'/>
        </div>
        
        <h1 className="titulo-portada">Nuestro Trabajo</h1>
        <div className="cont-texto">
          <p className="texto">If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.</p>
        </div>
      </div>
  )
}

export default Trabajo