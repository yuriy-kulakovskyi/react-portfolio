import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
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
    "content": "projects",
    "active": "disactive"
  },

  {
    "id": 3,
    "content": "contact",
    "active": "disactive"
  },
];

const Home = () => {
  useEffect(() => {
    // alert("home");
  }, []);

  return (
    // section with className home
    <section className="home">
      {/* Loader */}
      <Loader
        firstT={500}
        secondT={1000}
        thirdT={1500}
        fourthT={2000}
        fullT={2500}
      />

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
      <Footer 
        color={"#fff"}
      />
    </section>
  );
}

export default Home;
