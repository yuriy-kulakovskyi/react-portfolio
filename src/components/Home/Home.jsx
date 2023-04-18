import React from 'react';
import Header from '../Header/Header';
import Footer from './Footer/Footer';
import './Home.css';
import Main from './Main/Main';
import ParticlesComponent from '../../Particles/ParticlesComponent';

const nav = [
  {
    "id": 0,
    "content": "home",
    "active": "active"
  },

  {
    "id": 1,
    "content": "about",
    "active": "disactive"
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

const Home = () => {
  return (
    // section with className home
    <section className="home">
      {/* Particles */}
      <ParticlesComponent />

      {/* div with className home__container */}
      <div className="home__container container">
        {/* Header */}
        <Header nav={nav} />

        {/* Main */}
        <Main />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}

export default Home;
