import React, {useRef, useState} from 'react'
import Logo1 from '../imagenes/Empowerit-logo1.png';
import emailjs from '@emailjs/browser';
import './Formulario.css';
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Alert, info } from 'react-bootstrap';


const Formulario = () => {
  const {t, i18n} = useTranslation(["global"]);
  const [show, setShow] = useState(false);


  function sendEmail(e) {
    setShow(true)
    setTimeout(() => setShow(false), 5000);
    e.preventDefault();
    
    emailjs.sendForm('service_pkbhc9v', 'template_skzlnpq', e.target, '__zvtwrKoXuKLrJCc')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    e.target.reset();
    
  
  }


  const [captchaTrue, changeCaptcha] = useState(false);
  
  const captcha = useRef(null);
  const onChange =() =>{
    if(captcha.current.getValue()){
      changeCaptcha(true);
      
    } else {changeCaptcha(false);
      
      
    }
  }
      const [formOk, changeFormOk] = useState(false);
      
      
      
      return (
        
        <div className='div-form'>
          <div className='titulo'>
            <img
              src={Logo1}
              width="60"
              height="auto"
              className="logo"
              alt="empowerit-logo1"
            />
            <h1 className='title-form'>{t("form.title")}</h1>
          </div>
            <Formik
              initialValues={{
                user_name:'',
                lname: '',
                email:'',
                prof: '',
                company:'',
                city:'',
                country:'',
                number:'',
                message:''
                
              }}
              validate={(valores) =>{
                let errores = {};
                if(!valores.user_name){
                  errores.user_name = `${t("error-form.f-name")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.user_name)){
                  errores.user_name= `${t("error-form.character")}`
                  
                }
                if(!valores.lname){
                  errores.lname = `${t("error-form.l-name")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.lname)){
                  errores.lname = `${t("error-form.character")}`
                }
                if(!valores.email){
                  errores.email = `${t("error-form.email")}`
                } else if (!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(valores.email)){
                  errores.email = `${t("error-form.email-inv")}`
                }
                if(!valores.prof){
                  errores.prof = `${t("error-form.prof")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.prof)){
                  errores.prof = `${t("error-form.character")}`
                }
                if(!valores.company){
                  errores.company = `${t("error-form.company")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.company)){
                  errores.company = `${t("error-form.character")}`
                }
                if(!valores.city){
                  errores.city = `${t("error-form.city")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.city)){
                  errores.city = `${t("error-form.character")}`
                }
                if(!valores.country){
                  errores.country = `${t("error-form.country")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.country)){
                  errores.country = `${t("error-form.character")}`
                }
                
                if(!valores.number){
                  errores.number = `${t("error-form.number")}`
                } else if (!/^([0-9])*$/.test(valores.number)){
                  errores.number = `${t("error-form.number-ch")}`
                }
                if(!valores.message){
                  errores.message = `${t("error-form.message")}`
                } else if (!/^[a-zA-ZÀ-ÿ\u00E0-\u00FC\'/]{1,40}$/.test(valores.message)){
                  errores.message = `${t("error-form.character")}`
                }
                return errores;
              }}
              
              
                

              onSubmit={(valores, {resetForm})=> {
                
                resetForm();
                console.log('enviado')
                changeFormOk(true);
                
                
                setTimeout(() => changeFormOk(false), 5000);
                
              }}
              
              
            >
              {({errors}) => (

                <Form  className="conte-todo" onSubmit={sendEmail} >
                  <div>
                    
                    <label className='form-label' htmlFor="name">{t("form.f-name")}</label>
                    <Field 
                      className='input'
                      type='text' 
                      id='name'
                      name="user_name" 
                      placeholder={t("form.f-name")} 
                    />
                    <ErrorMessage name='user_name' component={() => (
                      <div className="error">{errors.user_name} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="lname">{t("form.l-name")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='lname' 
                      name="lname" 
                      placeholder={t("form.l-name")}
                    />
                    <ErrorMessage name='lname' component={() => (
                      <div className="error">{errors.lname} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="email">{t("form.email")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='email' 
                      name="email" 
                      placeholder={t("form.email")}
                    />
                    <ErrorMessage name='email' component={() => (
                      <div className="error">{errors.email} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="prof">{t("form.prof")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='prof' 
                      name="prof" 
                      placeholder={t("form.prof")}
                    />
                    <ErrorMessage name='prof' component={() => (
                      <div className="prof">{errors.name} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="company">{t("form.company")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='company' 
                      name="company" 
                      placeholder={t("form.company")}
                    />
                    <ErrorMessage name='company' component={() => (
                      <div className="error">{errors.company} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="city">{t("form.city")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='city' 
                      name="city" 
                      placeholder={t("form.city")}
                    />
                    <ErrorMessage name='city' component={() => (
                      <div className="error">{errors.city} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="country">{t("form.country")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='country' 
                      name="country" 
                      placeholder={t("form.country")}
                    />
                    <ErrorMessage name='country' component={() => (
                      <div className="error">{errors.country} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="number">{t("form.number")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='number' 
                      name="number" 
                      placeholder={t("form.number")}
                    />
                    <ErrorMessage name='number' component={() => (
                      <div className="error">{errors.number} </div>
                    )}/>
                  </div>
                  <div>
                    <label className='form-label' htmlFor="message">{t("form.message")}</label>
                    <Field 
                      required
                      className='input'
                      type='text' 
                      id='message' 
                      name="message" 
                      placeholder={t("form.message")}
                    />
                    <ErrorMessage name='message' component={() => (
                      <div className="error">{errors.message} </div>
                    )}/>
                    
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="Acepta"/>
                      <label class="form-check-label" for="flexCheckDefault">{t("form.reg")}</label>
                    </div>
                    
                  </div>
                  
                    <div className='recaptcha'>
                      <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LcAgPYUAAAAAOn1KXbqQKvWRVKzQPPuAdABjaoK"
                        onChange={onChange}
                      />
                    </div>
                  
                    <div className='buton-submit'>
                      <button type='submit' disabled={!captchaTrue} className='btn-main hover-filled-slide-up' >
                        <span>{t("form.button")}</span>
                      </button>
                    
                    </div>
                </Form>
              )}
              </Formik>
              <Alert show={show} key='info' variant='info'>
                {t("form.send")}
              </Alert>
        </div>
  
  )
}
export default Formulario;