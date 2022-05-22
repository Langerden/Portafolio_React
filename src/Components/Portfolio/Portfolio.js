import React, { useState, useEffect } from "react";
import "./Portfolio.css";

function Portfolio(props) {
  const [newWork, setNewWork] = useState({});
  const [updated, setUpdated] = useState(false);

  useEffect(
    function () {
      setUpdated(false);
    },[updated]);

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
    props.data.portfolio.projects.push(newWork);
    props.setUpdatedResumeData(props.data);
    setUpdated(true);
    console.log(props.data);
  }

  function deleteWorkItem(evt) {
    var index = props.data.portfolio.projects.findIndex(
      (element) =>
        element.title + element.url === evt.target.value
    );
    props.data.portfolio.projects.splice(index, 1);
    props.setUpdatedResumeData(props.data);
    setUpdated(true);
  }

  const works = props.data.portfolio.projects.map((projects) => {
    return (
      <div key={projects.title + projects.url} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
            <iframe src={projects.url} title={projects.title}></iframe>
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
        {props.editorMode ? (
          <button
            type="button"
            onClick={deleteWorkItem}
            value={projects.title + projects.url}
          >
            Eliminar
          </button>
        ) : null}
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Mira algunos de mis trabajos.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {works}
          </div>
          {props.editorMode ? (
            <form name="work" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Titulo"
                onChange={handleWorkChange}
                required="required"
              />
              <input
                type="text"
                name="category"
                placeholder="Breve descriptcion"
                onChange={handleWorkChange}
                required="required"
              />
              <input
                type="text"
                name="url"
                placeholder="URL al sitio"
                onChange={handleWorkChange}
                required="required"
              />
              <button type="submit">Guardar</button>
            </form>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
