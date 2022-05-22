import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {props.data.social.map(function (network) {
              return network.show ? <li key={network.name}><a href={network.url + network.userName}><i className={network.className}></i></a></li> : null
            })}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2022 Grupo 01 - comisión 22014</li>
            <li>Diseñado para Programa Codo a Codo</li>
          </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Volver arriba" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
