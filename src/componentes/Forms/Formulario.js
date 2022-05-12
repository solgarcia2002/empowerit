import React, {useRef, useState} from 'react'
import Form from 'react-bootstrap/Form'
import emailjs from '@emailjs/browser';
import './Formulario.css';
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

import { Col, InputGroup } from 'react-bootstrap';

const Formulario = () => {
  const {t, i18n} = useTranslation(["global"]);


  const [captchaTrue, changeCaptcha] = useState(false);
  
  const captcha = useRef(null);
  const onChange =() =>{
    if(captcha.current.getValue()){
      changeCaptcha(true);
      
    } else {changeCaptcha(false);
      
      
    }
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 

    setValidated(true);
    emailjs.sendForm('service_pkbhc9v', 'template_skzlnpq', event.target, '__zvtwrKoXuKLrJCc')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
      
    
    
  };
    

  
  
    
      return (
          
        <div className='div-form'>
          <h1 className='title-form'>{t("form.title")}</h1>
          
          
 
              <Form noValidate validated={validated} className="conte-todo" onSubmit={handleSubmit} >
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label>{t("form.f-name")}</Form.Label>
                    <Form.Control required type="text"  name='user_name' placeholder={t("form.f-name")} />
                    <Form.Control.Feedback type="invalid">{t("error-form.f-name")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label>{t("form.l-name")}</Form.Label>
                    <Form.Control required type="text"  name= "user_lname" placeholder={t("form.l-name")} />
                    <Form.Control.Feedback type="invalid">{t("error-form.l-name")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label>{t("form.email")}</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control required type="email" name='email' placeholder={t("form.email")}  aria-describedby="inputGroupPrepend" />
                      <Form.Control.Feedback type="invalid"> {t("error-form.email")}
                      </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label>{t("form.prof")}</Form.Label>
                    <Form.Control required type="text" name='prof' placeholder={t("form.prof")} />
                    <Form.Control.Feedback type="invalid">{t("error-form.prof")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4'className="mb-3" controlId="company">
                    <Form.Label >{t("form.company")}</Form.Label>
                    <Form.Control required type="text"  name='company' placeholder={t("form.company")}/>
                    <Form.Control.Feedback type="invalid">{t("error-form.company")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label>{t("form.city")}</Form.Label>
                    <Form.Control required type="text"  name='city' placeholder={t("form.city")} />
                    <Form.Control.Feedback type="invalid">{t("error-form.city")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label >{t("form.country")}</Form.Label>
                    <Form.Control required type="text"  name='country' placeholder={t("form.country")} />
                    <Form.Control.Feedback type="invalid">{t("error-form.country")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label >{t("form.number")}</Form.Label>
                    <Form.Control required type="number"  name='number' placeholder={t("form.number")} />
                    <Form.Control.Feedback type="invalid">{t("error-form.number")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='4' className="mb-3" >
                    <Form.Label  >{t("form.message")}</Form.Label>
                    <Form.Control required as="textarea" rows={3}  name='message'placeholder={t("form.message")}/>
                    <Form.Control.Feedback type="invalid">{t("error-form.message")}</Form.Control.Feedback>
                </Form.Group>
                <Form.Check
                  label={t("form.reg")}
                  feedback='Cargar Error'
                  feedbackType='invalid' 
                  aria-label="option 1" />
                  
                  <div className='recaptcha'>
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey="6LcAgPYUAAAAAOn1KXbqQKvWRVKzQPPuAdABjaoK"
                      onChange={onChange}
                    />
                  </div>
                
                <button type='submit' disabled={!captchaTrue} className='btn-main hover-filled-slide-up' >
                  <span>{t("form.button")}</span>
                </button>
              </Form>
        </div>
  
  )
}
export default Formulario;