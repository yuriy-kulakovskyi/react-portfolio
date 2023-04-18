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
        <img src={info.img === undefined ? process.env.PUBLIC_URL + "/img/avatar.webp" : process.env.PUBLIC_URL + info.img} alt="Avatar" />
      </div>

      {/* Paragraph with className info__paragraph */}
      <p className="info__paragraph">
        {info.paragraph === undefined ? "I'm a creative, communicative and analytical front-end developer with strong resilience. I design aesthetic and user-friendly web interfaces, communicate effectively with team members and clients, analyze data to find optimal solutions, and deliver quality work even under high pressure and tight deadlines." : info.paragraph}
      </p>
    </div>
  );
}

export default Info;
