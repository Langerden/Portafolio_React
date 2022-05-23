import React, { useState, useEffect } from "react";
import "./Resume.css";

function Resume(props) {
  const [newEducation, setNewEducation] = useState({})
  const [newWork, setNewWork] = useState({})
  const [newSkills, setNewSkills] = useState({})
  const [updated, setUpdated] = useState(false)

  useEffect(function () {
    setUpdated(false)
  }, [updated])

  function handleEducationChange(evt) {
    const { name, value } = evt.target;
    const newValues = {
      ...newEducation,
      [name]: value
    }
    setNewEducation(newValues);
  }

  function handleWorkChange(evt) {
    const { name, value } = evt.target;
    const newValues = {
      ...newWork,
      [name]: value
    }
    setNewWork(newValues);
  }

  function handleSkillsChange(evt) {
    const { name, value } = evt.target;
    const newValues = {
      ...newSkills,
      [name]: value
    }
    setNewSkills(newValues);
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const { name } = evt.target;

    if (name === "work") {
      props.data.resume.work.push(newWork)
    } else if (name === "education") {
      props.data.resume.education.push(newEducation)
    } else if (name === "skills") {
      props.data.resume.skills.push(newSkills)
    }

    props.setUpdatedResumeData(props.data)
    setUpdated(true)
    console.log(props.data)
  }

  function deleteEducationItem(evt) {
    var index = props.data.resume.education.findIndex(element => element.school + element.degree + element.graduated === evt.target.value)
    props.data.resume.education.splice(index, 1)
    props.setUpdatedResumeData(props.data)
    setUpdated(true)
  }

  function deleteWorkItem(evt) {
    var index = props.data.resume.work.findIndex(element => element.years + element.company + element.title === evt.target.value)
    props.data.resume.work.splice(index, 1)
    props.setUpdatedResumeData(props.data)
    setUpdated(true)
  }

  function deleteSkillsItem(evt) {
    var index = props.data.resume.skills.findIndex(element => element.nameSkill === evt.target.value)
    props.data.resume.skills.splice(index, 1)
    props.setUpdatedResumeData(props.data)
    setUpdated(true)
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Educación y cursos</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {props.data.resume.education.map((edu) => {
                return (
                  <div key={edu.school + edu.degree + edu.graduated} className="row education">
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
                    {props.editorMode ? (
                      <button className="new-button" type="button" onClick={deleteEducationItem} value={edu.school + edu.degree + edu.graduated}>
                        Eliminar
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {props.editorMode ? (
            <form className="twelve columns forms-resume" name="education" onSubmit={handleFormSubmit}>
              <input
                className="forms-resume-item"
                type="text"
                name="school"
                placeholder="Nombre de la institucion"
                onChange={handleEducationChange}
                required="rqeuired"
              />
              <input
                className="forms-resume-item"
                type="text"
                name="degree"
                placeholder="Titulo alcanzado"
                onChange={handleEducationChange}
                required="rqeuired"
              />
              <input
                className="forms-resume-item"
                type="text"
                name="graduated"
                placeholder="Fecha de graduacion"
                onChange={handleEducationChange}
                required="rqeuired"
              />
              <input
                className="forms-resume-item"
                type="text"
                name="description"
                placeholder="Descripcion de lo aprendido"
                onChange={handleEducationChange}
                required="rqeuired"
              />
              <button className="new-button" type="submit" >Agregar</button>
            </form>
            ) : null}
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Experiencia Laboral</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {props.data.resume.work.map((job) => {
            return (
              <div key={job.years + job.company + job.title} className="row work">
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
                  <button className="new-button" type="button" onClick={deleteWorkItem} value={job.years + job.company + job.title}>
                    Eliminar
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
        {props.editorMode ? (
          <form className="twelve columns forms-resume" name="work" onSubmit={handleFormSubmit}>
            <input
              className="forms-resume-item"
              type="text"
              name="company"
              placeholder="Nombre de compañia"
              onChange={handleWorkChange}
              required="rqeuired"
            />
            <input
              className="forms-resume-item"
              type="text"
              name="title"
              placeholder="Puesto de trabajo"
              onChange={handleWorkChange}
              required="rqeuired"
            />
            <input
              className="forms-resume-item"
              type="text"
              name="years"
              placeholder="Periodo trabajado"
              onChange={handleWorkChange}
              required="rqeuired"
            />
            <input
              className="forms-resume-item"
              type="text"
              name="description"
              placeholder="Descripcion del cargo"
              onChange={handleWorkChange}
              required="rqeuired"
            />
            <button className="new-button" type="submit" >Agregar</button>
          </form>
        ) : null}
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Habilidades</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{props.data.skillmessage} </p>
          <div className="bars">
            <ul className="skills">
              {props.data.resume.skills.map((skill) => {
                return (
                  <div key={skill.nameSkill} className="bars">
                    <ul className="skills">
                      <li>
                        <label>{skill.nameSkill}</label>
                        <div className="skill-elements">
                          <div className="skill-element1" style={{ width: skill.level + "%" }}>
                          </div>
                          <div className="skill-element2" style={{ width: 100 - skill.level + "%" }}>
                          </div>
                        </div>
                      </li>
                      {props.editorMode ? (
                        <button className="new-button" type="button" onClick={deleteSkillsItem} value={skill.nameSkill}>
                          Eliminar
                        </button>
                      ) : null}
                    </ul>
                  </div>
                );
              })}
            </ul>
            {props.editorMode ? (
              <form className="twelve columns forms-resume" name="skills" onSubmit={handleFormSubmit}>
                <input
                  className="forms-resume-item"
                  type="text"
                  name="nameSkill"
                  placeholder="Nombre de la herramienta o skill"
                  onChange={handleSkillsChange}
                  required="rqeuired"
                />
                <input
                  className="forms-resume-item"
                  type="text"
                  name="level"
                  placeholder="Nivel alcanzado"
                  onChange={handleSkillsChange}
                  required="rqeuired"
                />
                <button className="new-button" type="submit" >Agregar</button>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;