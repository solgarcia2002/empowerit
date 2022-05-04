import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button,} from 'bootstrap'
import emailjs from '@emailjs/browser';
import { FormLabel } from 'react-bootstrap';
import './Formulario.css';

const Formulario = () => {
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_km9yz2h','template_06r836v',event.target,'Zjo6mNYvNam9PYTZC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
      return (
        <div className='div-form'>
          <h1 className='title-form'>Contact Us</h1>
          <form className='form-mail' onSubmit={sendEmail}>
 
                <Form classname="conte-todo">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Titulo profesional</Form.Label>
                    <Form.Control type="email" placeholder="Enter Job Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control type="email" placeholder="Enter Company" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="email" placeholder="Enter City" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Pais</Form.Label>
                    <Form.Control type="email" placeholder="Enter Country" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Numero de Contacto</Form.Label>
                    <Form.Control type="email" placeholder="Enter Contact Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Check aria-label="option 1" />
                  <Form classname='regi'>Me gustaría registrarme con mi dirección de correo electrónico para recibir comunicaciones de Empowerit</Form>
                  <button className='btn-main hover-filled-slide-up'>
                    <span>Enviar</span>
                  </button>
                </Form>
            </form>
        </div>
  
  )
}
export default Formulario