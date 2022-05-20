import React from "react";
import "./Resume.css";

function Resume(props) {
  // function handleSocialChange(evt) {
  //   const { name, value } = evt.target;

  //   var newSocial = props.data.social;
  //   if (name.endsWith("userName")) {
  //     var nameSplitted = name.split("@");
  //     newSocial = props.data.social.map((network) => {
  //       if (network.name == nameSplitted[0]) {
  //         network.userName = value;
  //       }
  //       return network;
  //     });
  //   }

  //   const newValues = {
  //     ...props.data,
  //     social: newSocial,
  //   };
  //   props.setUpdatedResumeData(newValues);
  // }

  // function handleEducationChange(evt) {
  //   const { name, value } = evt.target;

  //   var newEducation = props.data.resume.education;
  //   if (name.endsWith("userName")) {
  //     var nameSplitted = name.split("@");
  //     newEducation = props.data.resume.education.map((element) => {
  //       if (element.name === nameSplitted[0]) {
  //         element.userName = value;
  //       }
  //       return element;
  //     });
  //   }

  //   const newValues = {
  //     ...props.data,
  //     resume: {
  //       ...props.data.resume,
  //       education: newEducation,
  //     },
  //   };
  //   props.setUpdatedResumeData(newValues);
  // }

  // function handleSocialChange(evt) {
  //   const { name, value } = evt.target;

  //   var newSocial = props.data.social;
  //   if (name.endsWith("userName")) {
  //     var nameSplitted = name.split("@");
  //     newSocial = props.data.social.map((network) => {
  //       if (network.name == nameSplitted[0]) {
  //         network.userName = value;
  //       }
  //       return network;
  //     });
  //   }

  //   const newValues = {
  //     ...props.data,
  //     social: newSocial,
  //   };
  //   props.setUpdatedResumeData(newValues);
  // }

  var auxWork = {};
  function handleChange(evt) {
    const { name, value } = evt.target;

    auxWork = {
      ...auxWork,
      [name]: value,
    };
    console.log(auxWork);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(auxWork);
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {props.data.resume.education.map((edu) => {
                return (
                  <div key={edu.school} className="row education">
                    <div className="three columns header-col">
                      <h1>
                        <span>{edu.school}</span>
                      </h1>
                      <div className="meta">
                        <p className="info">{edu.degree}</p>
                        <p className="info">{edu.graduated}</p>
                      </div>
                    </div>
                    <div className="nine columns main-col">
                      <p>{edu.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {props.data.resume.work.map((job) => {
            return (
              <div key={job.company} className="row work">
                <div className="three columns header-col">
                  <h1>
                    <span>{job.company}</span>
                  </h1>
                  <div className="meta">
                    <p className="info">{job.title}</p>
                    <p className="info">{job.years}</p>
                  </div>
                </div>
                <div className="nine columns main-col">
                  <p>{job.description}</p>
                </div>
                {props.editorMode ? (
                  <button type="button" onClick={console.log("")}>
                    Eliminar
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
        {props.editorMode ? (
          <form name="work" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="company"
              placeholder="Nombre de compañia"
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              placeholder="Puesto de trabajo"
              onChange={handleChange}
            />
            <input
              type="text"
              name="years"
              placeholder="Años trabajados"
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Descripcion del cargo"
              onChange={handleChange}
            />
            <button type="submit" >Guardar</button>
          </form>
        ) : null}
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{props.data.skillmessage} </p>
          <div className="bars">
            <ul className="skills">
              {props.data.resume.skills.map((skill) => {
                return (
                  <div key={skill.name} className="bars">
                    <ul className="skills">
                      <li>
                        <span className="bar-expand" />
                        <em>{skill.name}</em>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;