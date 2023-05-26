import React, { useState, useEffect } from 'react';
import "./Loader.css";

const Loader = ({firstT, secondT, thirdT, fourthT, fullT}) => {
  // first dot
  const [first, setFirst] = useState(false);

  // second dot
  const [second, setSecond] = useState(false);

  // third dot
  const [third, setThird] = useState(false);

  // fourth dot
  const [fourth, setFourth] = useState(false);

  // fully loaded
  const [loaded, setLoaded] = useState(false);

  // load all dots
  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, firstT);

    setTimeout(() => {
      setSecond(true);
    }, secondT);

    setTimeout(() => {
      setThird(true);
    }, thirdT);

    setTimeout(() => {
      setFourth(true);
    }, fourthT);

    setTimeout(() => {
      setLoaded(true);

      setTimeout(() => {
        document.querySelector(".loader__border__circle").style.transform = "rotate(180deg)";
        document.querySelector(".loader__border__circle").style.backgroundColor = "#32CD32";

        setTimeout(() => {
          document.querySelector(".loader").style.display = "none";
        }, firstT);
      }, firstT);
    }, fullT);
  }, [firstT, secondT, thirdT, fourthT, fullT]);

  return (
    <section className='loader'>
      {/* Loader border */}
      <div className="loader__border" style={{borderColor: loaded ? "#90EE90" : "rgb(220, 229, 239)"}}>
        {/* circle */}
        <div className="loader__border__circle">
          <div className="loader__border__circle__top">
            <div 
              style={
                {backgroundColor: first ? "#00FF00": "rgb(220, 229, 239)", boxShadow: first ? "0 0 5px #C2E54F" : "none"}
              } 
              className="loader__border__circle__dot"></div>
          </div>
          <div className="loader__border__circle__middle">
            <div
              style={
                {backgroundColor: fourth ? "#00FF00": "rgb(220, 229, 239)", boxShadow: fourth ? "0 0 5px #C2E54F" : "none"}
              } 
              className="loader__border__circle__dot"></div>
            <div
              style={
                {backgroundColor: second ? "#00FF7F": "rgb(220, 229, 239)", boxShadow: second ? "0 0 5px #C2E54F" : "none"}
              } 
              className="loader__border__circle__dot"></div>
          </div>
          <div className="loader__border__circle__bottom">
            <div
              style={
                {backgroundColor: third ? "#00FF7F": "rgb(220, 229, 239)", boxShadow: third ? "0 0 5px #C2E54F" : "none"}
              } 
              className="loader__border__circle__dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
