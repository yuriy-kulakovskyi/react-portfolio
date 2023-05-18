import React from 'react';
import Header from "../Header/Header";
import Main from './Main/Main';

// Loader component
import Loader from "../Loader/Loader";

import "./About.css";

const nav = [
  {
    "id": 0,
    "content": "home",
    "active": "disactive"
  },

  {
    "id": 1,
    "content": "about",
    "active": "active"
  },

  {
    "id": 2,
    "content": "projects",
    "active": "disactive"
  },

  {
    "id": 3,
    "content": "contact",
    "active": "disactive"
  },
];

const About = () => {
  return (
    <section className="about">
      {/* Loader component */}
      <Loader
        firstT={300}
        secondT={600}
        thirdT={900}
        fourthT={1200}
        fullT={1500}
      />


      {/* Header component */}
      <Header nav={nav} />

      {/* Container */}
      <div className="about__container container">
        <Main />
      </div>
    </section>
  );
}

export default About;
