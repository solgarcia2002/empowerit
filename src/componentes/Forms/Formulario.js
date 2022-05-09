import React from 'react'
import Form from 'react-bootstrap/Form'
import emailjs from '@emailjs/browser';
import './Formulario.css';
import { useTranslation } from "react-i18next";

const Formulario = () => {
    const {t, i18n} = useTranslation(["global"]);
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_km9yz2h','template_06r836v',event.target,'Zjo6mNYvNam9PYTZC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
      return (
          
        <div className='div-form'>
          <h1 className='title-form'>{t("form.title")}</h1>
          <form className='form-mail' onSubmit={sendEmail}>
 
                <Form classname="conte-todo">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.f-name")}</Form.Label>
                    <Form.Control type="text" placeholder={t("form.f-name")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.l-name")}</Form.Label>
                    <Form.Control type="text" placeholder={t("form.l-name")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.email")}</Form.Label>
                    <Form.Control type="email" placeholder={t("form.email")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.prof")}</Form.Label>
                    <Form.Control type="text" placeholder={t("form.prof")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.company")}</Form.Label>
                    <Form.Control type="text" placeholder={t("form.company")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.city")}</Form.Label>
                    <Form.Control type="text" placeholder={t("form.city")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.country")}</Form.Label>
                    <Form.Control type="text" placeholder={t("form.country")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("form.number")}</Form.Label>
                    <Form.Control type="number" placeholder={t("form.number")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >{t("form.message")}</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder={t("form.message")}/>
                </Form.Group>
                <Form.Check aria-label="option 1" />
                  <Form classname='regi'>{t("form.reg")}</Form>
                  <button className='btn-main hover-filled-slide-up'>
                    <span>{t("form.button")}</span>
                  </button>
                </Form>
            </form>
        </div>
  
  )
}
export default Formulario;