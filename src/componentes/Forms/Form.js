import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from '@emailjs/browser';



export const Form = () => {

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
        <label>First Name</label>
        <input type="text" name='first_name' />
        
        <hr />

        <label>Last Name</label>
        <input type="text" name='last_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Titulo profesional</label>
        <input type="text" name='job_title' />
        <hr />

        <label>Empresa</label>
        <input type="text" name='company' />
        <hr />

        <label>Ciudad</label>
        <input type="text" name='city' />
        <hr />

        <label>Pais</label>
        <input type="text" name='country' />
        <hr />

        <label>Numero de Contacto</label>
        <input type="text" name='contact number' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button className='send-button'>Send</button>
      </form>
    </div>
  )
}

