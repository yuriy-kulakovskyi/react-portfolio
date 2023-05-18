import React from 'react';
import Header from '../Header/Header';
import Main from './Main/Main';

// Loader component
import Loader from "../Loader/Loader";

import "./Projects.css";

const nav = [
  {
    "id": 0,
    "content": "home",
    "active": "disactive"
  },

  {
    "id": 1,
    "content": "about",
    "active": "disactive"
  },

  {
    "id": 2,
    "content": "projects",
    "active": "active"
  },

  {
    "id": 3,
    "content": "contact",
    "active": "disactive"
  },
];

const Projects = () => {
  return (
    <section className="projects">
      {/* Loader component */}
      <Loader
        firstT={300}
        secondT={600}
        thirdT={900}
        fourthT={1200}
        fullT={1500}
      />
      
      {/* Header */}
      <Header nav={nav} />

      {/* Container */}
      <div className="projects__container container">
        <Main />
      </div>
    </section>
  );
}

export default Projects;
