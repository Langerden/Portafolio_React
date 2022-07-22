import React, { useState, useEffect } from "react";
import "./Testimonials.css";

function Testimonials(props) {
  const [newWork, setNewWork] = useState({});
  const [updated, setUpdated] = useState(false);

  useEffect(
    function () {
      setUpdated(false);
    },
    [updated]
  );

  function handleWorkChange(evt) {
    const { name, value } = evt.target;
    const newValues = {
      ...newWork,
      [name]: value,
    };
    setNewWork(newValues);
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    props.data.testimonials.testimonials.push(newWork);
    props.setUpdatedResumeData(props.data);
    setUpdated(true);
    console.log(props.data);
  }

  function deleteWorkItem(evt) {
    var index = props.data.testimonials.testimonials.findIndex(
      (element) => element.user === evt.target.value
    );
    props.data.testimonials.testimonials.splice(index, 1);
    props.setUpdatedResumeData(props.data);
    setUpdated(true);
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Testimonios de clientes</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              {props.data.testimonials.testimonials.map(function (
                testimonials
              ) {
                return (
                  <li key={testimonials.user}>
                    <blockquote>
                      <p>{testimonials.text}</p>
                      <cite>{testimonials.user}</cite>
                    </blockquote>
                    {props.editorMode ? (
                      <button
                        className="new-button"
                        type="button"
                        onClick={deleteWorkItem}
                        value={testimonials.user}
                      >
                        Eliminar
                      </button>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            {props.editorMode ? (
              <form className="twelve columns forms-resume" name="work" onSubmit={handleFormSubmit}>
                <input
                  className="forms-resume-item form-control form-control-lg row"
                  type="text"
                  name="user"
                  placeholder="Nombre de persona a citar"
                  onChange={handleWorkChange}
                  required="required"
                />
                <input
                  className="forms-resume-item form-control form-control-lg row mt-2"
                  type="text"
                  name="text"
                  placeholder="Redactar la cita aqui"
                  onChange={handleWorkChange}
                  required="required"
                />
                <button className="new-button mt-2" type="submit">Guardar</button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
