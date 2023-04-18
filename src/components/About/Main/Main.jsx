import React from 'react';
import Info from './Info/Info';
import Awards from './Awards/Awards';
import "./Main.css";

const Main = () => {
  return (
    <main className="main-about">
      <h2 className="main-about__title">
        <div className="main-about__title__text">
          About <span>me</span>
        </div>
        <div className="main-about__title__underline"></div>
      </h2>

      {/* Link Info component */}
      <Info />

      {/* Link Awards component */}
      <Awards />
    </main>
  );
}

export default Main;
