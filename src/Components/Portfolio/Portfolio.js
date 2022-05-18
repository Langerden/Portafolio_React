import React from 'react';
import './Portfolio.css'

function Portfolio(props) {
  const loadImage = require.context("../../images/portfolio", true);

  const works = props.data.projects.map((projects) => {
    return <div key={projects.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a href={projects.url} title={projects.title}>
          <img alt={projects.title} src={loadImage('./' + projects.image)} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
              <p>{projects.category}</p>
            </div>
          </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </a>
      </div>
    </div>
  });

  return (
    <section id="portfolio">

      <div className="row">

        <div className="twelve columns collapsed">

          <h1>Mira algunos de mis trabajos.</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {works}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Portfolio;
