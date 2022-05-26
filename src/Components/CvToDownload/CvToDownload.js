import React from 'react';
import '../About/About.css';
import '../Resume/Resume.css';
import '../Portfolio/Portfolio.css';

function CvToDownload(props) {

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
      </div>
    );
  });

  return (
    <div id="cv-to-download" hidden="true">
      {/* About */}
      <section id="about">

      <div className="row about">
        <div className="three columns">
          <img className="profile-pic" src={props.data.about.urlImage} alt="Foto de perfil" />
        </div>
        <div className="nine columns main-col">
          <h2>Sobre mí</h2>
          <p>{props.data.about.aboutMe}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Detalles de contacto</h2>
              <p className="address">
                <>
                  <span>{props.data.about.name}</span><br />
                  <span>{props.data.about.street}</span><br />
                  <span>{props.data.about.city}</span><br />
                  <span>{props.data.about.phone}</span><br />
                  <span>{props.data.about.email}</span>
                </>
              </p>
            </div>

          </div>
        </div>
      </div>
      </section>

      {/* resume */}
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Resume & Skills */}
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
              </div>
            );
          })}
        </div>
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
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      </section>

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
        </div>
      </div>
    </section>

    </div>
  );
}

export default CvToDownload;
