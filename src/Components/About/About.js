import {React, useState} from 'react';
import './About.css'

function About(props) {

   const handleChange = (evt) => {
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
      <div>
      <section id="about">
         <div className="row">
            <div className="three columns">
               {props.editorMode ?
                  <input type="text" name='urlImage' onChange={handleChange} placeholder='URL a la Imagen de perfil' />
                  : <img className="profile-pic" src={props.data.about.urlImage} alt="Foto de perfil" />}

            </div>
            <div className="nine columns main-col">
               <h2>Sobre mí</h2>

               {props.editorMode ?
                  <textarea name='aboutMe' onChange={handleChange} placeholder='Descripcion sobre ti' />
                  : <p>{props.data.about.aboutMe}</p>}
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Detalles de contacto</h2>
                     <p className="address">
                        {props.editorMode ?
                           <>
                              <input type="text" name='name' onChange={handleChange} placeholder='Nombre' />
                              <input type="text" name='street' onChange={handleChange} placeholder='Calle donde vives' />
                              <input type="text" name='city' onChange={handleChange} placeholder='Ciudad donde vives' />
                              <input type="text" name='phone' onChange={handleChange} placeholder='Telefono de contacto' />
                              <input type="text" name='email' onChange={handleChange} placeholder='Email de contacto' />
                           </>
                           : <>
                              <span>{props.data.about.name}</span><br />
                              <span>{props.data.about.street}</span><br />
                              <span>{props.data.about.city}</span><br />
                              <span>{props.data.about.phone}</span><br />
                              <span>{props.data.about.email}</span>
                           </>}
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        {props.editorMode ?
                           <input type="text" name='urlResumePdf' onChange={handleChange} placeholder='URL al pdf para descarga del CV' />
                           : null}
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   </div>
   );
}

export default About;
