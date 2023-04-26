import React from 'react';
import Title from '../../../Title/Title';
import "./Awards.css";
import certificates from "./certificates.json";


const Awards = () => {
  return (
    <div className='awards'>
      {/* Title */}
      <Title text="My" span="Awards" />

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
