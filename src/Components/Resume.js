import React from 'react';

function Resume(props) {

  const education = props.data.education.map((edu) => {
    return (
      <div key={edu.school} className="row education">
        <div className="three columns header-col">
          <h1><span>{edu.school}</span></h1>
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
  })

  const skills = props.data.skills.map((skill) => {
    return (
      <div key={skill.name} className="bars">
        <ul className="skills">
          <li><span className="bar-expand" /><em>{skill.name}</em></li>
        </ul>
      </div>
    );
  })

  const work = props.data.work.map((job) => {
    return (
      <div key={job.company} className="row work">
        <div className="three columns header-col">
          <h1><span>{job.company}</span></h1>
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
  }
  )

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>


      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{props.data.skillmessage} </p>
          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
