import React from 'react';

import'./style.css';
import logo from '../../Assets/img/sunbar.svg'

export default function Footer() {
  return (
    <footer>

        <div className="footer_container">
            <img src={logo} alt="logo footer"/>
            <div className="right">© 2020 VEVO LLC, ALL RIGHTS RESERVED</div>
        </div>

        <div className="footer_container_right">
            
            <div className="right">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            </div>
            <div className="right">siga nas redes sociais</div>
        </div>

    </footer>
  );
}
