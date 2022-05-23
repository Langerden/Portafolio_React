import React, { useState } from 'react';
import './Contact.css'

function Contact(props) {
   const [formValues, setFormValues] = useState(resetFormValues());

   function handleContactMessageChange(evt) {
      const { name, value } = evt.target;

      const newValues = {
         ...props.data,
         contact: {
            ...props.data.contact,
            [name]: value
         }
      };
      props.setUpdatedResumeData(newValues);
   }

   function handleChange(evt) {
      const { name, value } = evt.target;

      const newValues = {
         ...formValues,
         [name]: value,
      };
      setFormValues(newValues);
   }

   function resetFormValues() {
      return {
         contactName: "",
         contactEmail: "",
         contactSubject: "",
         contactMessage: "",
      };
   }

   function handleSubmit(event) {
      event.preventDefault();
      console.log(formValues)
   }

   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
               <p className="lead">{props.data.contact.contactMessage}</p>
               {props.editorMode ? <input type="text" name="contactMessage" placeholder='Escribe un texto de contacto' onChange={handleContactMessageChange} /> : null}
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Nombre <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange} required="required" />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange} required="required" />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Motivo de contacto</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange} />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={handleChange} required="required" ></textarea>
                     </div>

                     <div>
                        <button type="submit" className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
