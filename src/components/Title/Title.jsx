import React from 'react';
import "./Title.css";

const Title = ({ text, span }) => {
  return (
    <h2 className="title">
      <div className="title__text">
        {text} <span>{span}</span>
      </div>
      <div className="title__underline"></div>
    </h2>
  );
}

export default Title;
