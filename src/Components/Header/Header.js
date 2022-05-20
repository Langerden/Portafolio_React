import React from 'react';
import './Header.css'

function Header(props) {
   function modifyEditorMode() {
      props.setEditorMode(!props.editorMode)
   }

   function handleChange(evt) {
      const { name, value } = evt.target;

      const newValues = {
         ...props.data,
         header: {
            ...props.data.header,
            [name]: value
         }
      };
      props.setUpdatedResumeData(newValues);
   }

   function handleSocialChange(evt) {
      const { name, value } = evt.target;

      var newSocial = props.data.social;
      if (name.endsWith('userName')) {
         var nameSplitted = name.split('@')
         newSocial = props.data.social.map((network) => {
            if (network.name == nameSplitted[0]) {
               network.userName = value;
            }
            return network
         }
         )
      }

      const newValues = {
         ...props.data,
         social: newSocial
      };
      props.setUpdatedResumeData(newValues);
   }

   function toogleCheckbox(evt) {
      const { name, checked } = evt.target;
      var newSocial = props.data.social;

      if (name.endsWith('show')) {
         var nameSplitted = name.split('@')
         newSocial = props.data.social.map((network) => {
            if (network.name == nameSplitted[0]) {
               network.show = checked;
               console.log(network.show)
            }
            return network
         }
         )
      }

      const newValues = {
         ...props.data,
         social: newSocial
      };
      props.setUpdatedResumeData(newValues);
   }

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
            {!props.editorMode ? <div className="editSite">
               <a onClick={modifyEditorMode}>Editar sitio</a>
            </div> : null}
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{props.data.about.name}</h1>
               <h3>Soy {props.editorMode ? <input type="text" name='ocupation' onChange={handleChange} placeholder='Ocupacion' /> : <span>{props.data.header.ocupation} </span>}
                  y vivo en {props.data.about.city}. <br />
                  {props.editorMode ? <input type="text" name='description' onChange={handleChange} placeholder='Descripcion de lo que haces' /> : props.data.header.description}.</h3>
               <hr />
               <ul className="social">
                  {props.data.social.map((network) => {
                     return (
                        network.show || props.editorMode ?
                           <li key={network.name}>
                              {props.editorMode ?
                                 <><input type="text" name={network.name + '@userName'} placeholder={network.name} onChange={handleSocialChange} />
                                    <input type="checkbox" name={network.name + '@show'} checked={network.show} onChange={toogleCheckbox} /></>
                                 : network.show ? <a href={network.url + network.userName}><i className={network.className}></i></a> : null}
                           </li>
                           : null
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
