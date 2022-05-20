import React from 'react';
import './About.css'

function About(props) {
   function handleChange(evt) {
      const { name, value } = evt.target;

      const newValues = {
         ...props.data,
         about: {
            ...props.data.about,
            [name]: value
         }
      };
      props.setUpdatedResumeData(newValues);
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               {props.editorMode ? 
               <input type="text" name='urlImage' onChange={handleChange} placeholder='URL a la Imagen' /> 
               : <img className="profile-pic" src={props.data.about.urlImage} alt="Foto de perfil" />}

            </div>
            <div className="nine columns main-col">
               <h2>Sobre mí</h2>

               <p>{props.data.about.aboutMe}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Detalles de contacto</h2>
                     <p className="address">
                        <span>{props.data.about.name}</span><br />
                        <span>{props.data.about.street}<br />
                           {props.data.about.city}
                        </span><br />
                        <span>{props.data.about.phone}</span><br />
                        <span>{props.data.about.email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={props.data.about.urlResumePdf} className="button"><i className="fa fa-download"></i>Descargar currículum</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}

export default About;
