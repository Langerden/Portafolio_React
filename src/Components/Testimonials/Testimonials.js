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
              <form name="work" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="user"
                  placeholder="Titulo"
                  onChange={handleWorkChange}
                  required="required"
                />
                <input
                  type="text"
                  name="text"
                  placeholder="Breve descriptcion"
                  onChange={handleWorkChange}
                  required="required"
                />
                <button type="submit">Guardar</button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
