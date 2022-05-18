import React from 'react';
import './About.css'

function About(props) {

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={`images/${props.data.image}`} alt="Foto de perfil" />
            </div>
            <div className="nine columns main-col">
               <h2>Sobre mí</h2>

               <p>{props.data.bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Detalles de contacto</h2>
                     <p className="address">
                        <span>{props.data.name}</span><br />
                        <span>{props.data.address.street}<br />
                           {props.data.address.city} {props.data.address.state}, {props.data.address.zip}
                        </span><br />
                        <span>{props.data.phone}</span><br />
                        <span>{props.data.email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={props.data.resumedownload} className="button"><i className="fa fa-download"></i>Descargar currículum</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;
