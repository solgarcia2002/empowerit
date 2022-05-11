import {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import ClientCard from '../ClientsCard/ClientsCard';
import './Carousels.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className= "contenedor" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='diap1'> 
        <div className='slide-container'> 
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/clinify.png' title="Clinify Health - Chicago, US"/>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/betway.png' title="Betway - UK"/>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/renault.png' title="Renault - AR"/>
        </div>
      </Carousel.Item>
      <Carousel.Item className='diap2'>
        <div className='slide-container'>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/silco.png' title="SilcoPC - AR"/>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/desagoteslavictoria.png' title="Desagotes La Victoria - AR"/>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/imagenmasarquitectura.png' title="Imagen+Arquitectura - AR"/>
        </div>
      </Carousel.Item>
      <Carousel.Item className='diap3'>
        <div className='slide-container'>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/remolquesmirage.png' title="Remolques Mirage - AR"/>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/mosaicoslosamigos.png' title="Mosaicos Los Amigos - AR"/>
          <ClientCard image='https://empowerit-assets.s3.amazonaws.com/clients/lipinski.png' title="Propiedades Lipinski - AR"/>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}


export default ControlledCarousel;