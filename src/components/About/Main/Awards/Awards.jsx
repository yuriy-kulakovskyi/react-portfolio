import React, { useState } from 'react';
import axios from 'axios';
import "./Awards.css";

const Awards = () => {
  // certificates state
  const [certificates, setCertificates] = useState([]);

  // get them from https://portfolio-server-u50n.onrender.com/certificates by axios
  axios.get("https://portfolio-server-u50n.onrender.com/certificates")
    .then(res => setCertificates(res.data));

  return (
    <div className='awards'>
      {/* h2 with className awards__title and text My <span>awards</span> */}
      <h2 className="awards__title">
        <div className="awards__title__row">
          My <span>awards</span>
        </div>
        <div className="awards__title__underline"></div>
      </h2>

      {/* ul with className rewards__list */}
      <ul className="awards__list">
        {certificates.map((certificate, index) => {
          return (
            <li className="awards__list__item" key={index}>

              {/* img */}
              <img className='awards__list__item__img' src={process.env.PUBLIC_URL + certificate.img} alt={"Certificate image" + index} />

              <div className="awards__list__item__column">
                {/* h3 with className awards__list__item__column__name */}
                <h3 className="awards__list__item__column__name">{certificate.name}</h3>

                {/* p with className rewards__list__item__column__description */}
                <p className="awards__list__item__column__description">{certificate.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Awards;
