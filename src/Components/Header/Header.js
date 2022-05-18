import React from 'react';
import './Header.css'

function Header(props) {

   return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">Acerca de</a></li>
               <li><a className="smoothscroll" href="#resume">Resumen</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonios</a></li>
               <li><a className="smoothscroll" href="#contact">Contácteme</a></li>
            </ul>
            <div>
               <a className="" href="#home">Editar sitio</a>
            </div>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{props.data.name}</h1>
               <h3>Soy <span>{props.data.occupation}</span> y vivo en {props.data.address.city}. <br />{props.data.description}.</h3>
               <hr />
               <ul className="social">
                  {props.data.social.map((network) => {
                     return (
                        <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
                     );
                  }
                  )}
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
   );
}


export default Header;
