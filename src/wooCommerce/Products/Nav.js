import React from "react";
import './Nav.css';

const Nav = () => {
    return(
        <ul className="nav flex-sm-column">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categorias</a>
            </li>
                    
        </ul>
    )
}

export default Nav;