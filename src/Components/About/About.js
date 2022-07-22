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
               <input className="form-control form-control-lg" type="text" name='urlImage' onChange={handleChange} placeholder='URL a la Imagen de perfil' /> 
               : <img className="profile-pic" src={props.data.about.urlImage} alt="Foto de perfil" />}

            </div>
            <div className="nine columns main-col">
               <h2>Sobre mí</h2>

               {props.editorMode ? 
               <textarea rows="5" className="form-control" name='aboutMe' onChange={handleChange} placeholder='Descripcion sobre ti' /> 
               : <p>{props.data.about.aboutMe}</p>}
               <div className="row">
                  <div className="columns contact-details mt-3">
                     <h2>Detalles de contacto</h2>
                     <p className="address">
                        {props.editorMode ?
                           <>
                              <input className="form-control form-control-lg" type="text" name='name' onChange={handleChange} placeholder='Nombre' /> 
                              <input className="form-control form-control-lg mt-2" type="text" name='street' onChange={handleChange} placeholder='Calle donde vives' /> 
                              <input className="form-control form-control-lg mt-2" type="text" name='city' onChange={handleChange} placeholder='Ciudad donde vives' /> 
                              <input className="form-control form-control-lg mt-2" type="text" name='phone' onChange={handleChange} placeholder='Telefono de contacto' /> 
                              <input className="form-control form-control-lg mt-2" type="text" name='email' onChange={handleChange} placeholder='Email de contacto' /> 
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
                  <div className="columns download mt-2">
                     <p>
                     {props.editorMode ? 
                     <input className="form-control form-control-lg" type="text" name='urlResumePdf' onChange={handleChange} placeholder='URL al pdf para descarga del CV' /> 
                     : <a href={props.data.about.urlResumePdf} className="button"><i className="fa fa-download"></i>Descargar currículum</a>}
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
