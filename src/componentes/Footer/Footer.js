import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
     
<footer class="text-center footer-style">
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-col">
                <h3>Dirección</h3>
                <p>
                    Argentina - Córdoba
                </p>
            </div>
            <div className="col-md-4 footer-col">
                <h3>Contactanos</h3>
                <div classname="list-inline">
                    <li>
                        <a  target="_blank" rel='noreferrer'href="https://facebook.com"class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                    </li>
                    <li>
                        <a  target="_blank" rel='noreferrer'href="https://twitter.com" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                    </li>
                    <li>
                        <a  target="_blank" rel='noreferrer'href="https://linkedin.com" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                    </li>
                </div>
            </div>
            <div className="col-md-4 footer-col">
                <h3>Empowerit</h3>
                <p>Todos los derechos reservados Empowerit 2022</p>
            </div>
        </div>
    </div>
</footer>


      )
    }

 

export default Footer