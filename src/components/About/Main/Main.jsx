import React from 'react';
import Info from './Info/Info';
import Awards from './Awards/Awards';
import Title from '../../Title/Title';
import "./Main.css";

const Main = () => {
  return (
    <main className="main-about">
      {/* Title */}
      <Title text="About" span="Me" />

      {/* Link Info component */}
      <Info />

      {/* Link Awards component */}
      <Awards />
    </main>
  );
}

export default Main;
