import React from 'react';
import Header from "../Header/Header";
import Main from './Main/Main';
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
    "content": "skills",
    "active": "disactive"
  },

  {
    "id": 3,
    "content": "projects",
    "active": "disactive"
  },

  {
    "id": 4,
    "content": "contact",
    "active": "disactive"
  },
];

const About = () => {
  return (
    <section className="about">
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
