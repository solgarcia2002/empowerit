import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
     
<footer className="text-center text-lg-start bg-light text-muted">
  
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
   
    <div className="me-5 d-none d-lg-block  ">
      <span>"La mejor manera de predecir el futuro es crearlo"</span>
    </div>
   
  </section>

  <section className="">
    <div class="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Empowerit
          </h6>
          <p>
          Get connected with us on social networks:
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            Foolow us
          </h6>
          <div>
    <div classname="icons">
                   
                        <a  target="_blank" rel='noreferrer'href="https://facebook.com" class="me-4 text-reset"><i class="bi bi-facebook"></i></a>
                    
                    
                        <a  target="_blank" rel='noreferrer'href="https://whatsapp" class="me-4 text-reset"><i class="bi bi-whatsapp"></i></a>
                    
                        <a  target="_blank" rel='noreferrer'href="https://linkedin.com" class="me-4 text-reset"><i class="bi bi-linkedin"></i></a>
                    
                </div>
    </div>
  
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Nosotros</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Nuestro Trabajo</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Nuestros servicios</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Inversores</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
     
    </div>
  </section>
  

 
  <div className="text-center p-4" >
    © 2022 Copyright
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> </a>
  </div>
 
</footer>
      )
    }

 

export default Footer