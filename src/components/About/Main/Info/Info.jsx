import React from 'react';
import "./Info.css";
import info from "./information.json";

const Info = () => {
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
