import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";



const Footer = () => {
  const {t} = useTranslation(["global"]);
    return (
     
<footer className="text-center text-lg-start bg-light text-muted">
  
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block  ">
      <span></span>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h4 className="title-footer text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Empowerit
          </h4>
          <p>{t("cover.text")}</p>
          {/* <p>{t("footer.networks")}</p> */}
        </div>
        
        {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 as={Link} to='/desafio 'className="text-uppercase fw-bold mb-4">
            {t("footer.follow")}
          </h6>
          
          <div>
            <div className="icons">
              <a  target="_blank" rel='noreferrer'href="https://facebook.com" class="me-4 text-reset"><i class="bi bi-facebook"></i></a>
              <a  target="_blank" rel='noreferrer'href="https://whatsapp" class="me-4 text-reset"><i class="bi bi-whatsapp"></i></a>
              <a  target="_blank" rel='noreferrer'href="https://linkedin.com" class="me-4 text-reset"><i class="bi bi-linkedin"></i></a>
            </div>
          </div> 
        </div> */}
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h4 className="title-footer text-uppercase fw-bold mb-4">
            {t("footer.links")}
          </h4>
          <p>
            <a href="/desafio" className="text-reset">{t("nav-bar.challenge")}</a>
          </p>
          <p>
            <a href="/soluciones" className="text-reset">{t("nav-bar.solutions")}</a>
          </p>
          <p>
            <a href="our-job" className="text-reset">{t("nav-bar.our-job")}</a>
          </p>
          <p>
            <a href="unete" className="text-reset">{t("nav-bar.follow")}</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h4 className="title-footer text-uppercase fw-bold mb-4">
            
              <a href='contacto' class="text-reset">{t("nav-bar.contact")}</a>
          </h4>
          {/* <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p> */}
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@empowerit.io
          </p>
          {/* <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
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