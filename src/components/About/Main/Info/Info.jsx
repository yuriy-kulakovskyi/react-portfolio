import React, { useState } from 'react';
import "./Info.css";

const Info = () => {
  const [info, setInfo] = useState([]);
  
  // get info from https://portfolio-server-u50n.onrender.com/info by fetch()
  fetch("https://portfolio-server-u50n.onrender.com/info")
    .then(res => res.json())
    .then(data => setInfo(data[0]));
  
  return (
    <div className='info'>
      <div className="info__image-box">
        {/* img */}
        <img src={process.env.PUBLIC_URL + info.img} alt="Avatar" />
      </div>

      {/* Paragraph with className info__paragraph */}
      <p className="info__paragraph">
        {info.paragraph}
      </p>
    </div>
  );
}

export default Info;
