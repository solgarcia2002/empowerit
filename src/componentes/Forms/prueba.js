import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return(
    <>
      <Formik
        initialValues={{
          nombre:''
        }}
        validate={(valores) => {
          let errores = {};
          if(!valores.nombre){
            errores.nombre = 'Por favor ingresa un nombre'
          } else if (!/^[a-zA-ZÀ\s]{1,40}$/.test(valores.nombre)){
            errores.nombre = 'El nombre solo puede contener letras y espacios'
          }
          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
          emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
              console.log('FAILED...', error);
            });
          resetForm();
          console.log('enviado')
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({errors}) => (
          <Form className="formulario" >
            
            <div>
              <label htmlFor="name">Name</label>
              <Field 
                type='text' 
                id='nombre' 
                name="nombre" 
                placeholder="Nombre" 
              />
            
            </div>
            <button type='submit'>Enviar</button>
            <ErrorMessage name='nombre' component={() => (
              <div className="error">{errors.nombre} </div>
            )}/>
            {formularioEnviado && <p>Formulario enviado con exito</p>}
          </Form>
        )}
      </Formik>
    </>
  )
}
export default Formulario;

