import React from "react";
import "./Carditem.css";

const Card = ({ names, population, region, capital, img }) => {
  return (
    <a href={`/${names}`}>
      <div className="countries__card">
        <div className="card__image">
          <img src={img} alt={names} />
        </div>
        <div className="card__details">
          <strong>
            <p>{names}</p>
          </strong>
          <ul className="card__details-list">
            <li>
              <strong>Population:</strong> {population}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital: </strong>
              {capital.map((cap, index) => (
                <span key={cap + index}>{cap}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Card;
