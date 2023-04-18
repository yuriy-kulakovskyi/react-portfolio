import React, { useState } from 'react';
import axios from "axios";
import "./Info.css";

const Info = () => {
  // info state
  const [info, setInfo] = useState([]);
  
  // get info from https://portfolio-server-u50n.onrender.com/info by axios
  axios.get("https://portfolio-server-u50n.onrender.com/info")
    .then(res => setInfo(res.data[0]));

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
