import {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousels.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className= "contenedor" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='diap1'> 
        <img
          className="primer"
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='info1'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='diap2'>
        <img
          className="seg"
          src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='info2'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='diap3'>
        <img
          className="ter"
          src="https://cdn.pixabay.com/photo/2017/04/19/13/03/coffee-2242213__340.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='info3'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default ControlledCarousel;