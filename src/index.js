import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from 'react-helmet';



import './config-ln/i18next-config';

ReactDOM.render(
  
  <React.StrictMode>
    <Helmet>
      <title>Empowerit</title>
      <meta
      name="description"
      content="Somos quienes te impulsaran al éxito empoderando tu transformación digital. Especialistas en desarrollo web, diseño UX/UI, tiendas virtuales y más."
      />
    </Helmet>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
