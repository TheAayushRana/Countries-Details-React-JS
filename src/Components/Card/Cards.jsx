import React from "react";

const Cards = () => {
  return (
    <div className="country__detail flex__row">
      <div className="country__detail__img">
        <img src="" />
      </div>
      <div className="country__detail__text">
        <strong>
          <p>{names}</p>
        </strong>
        <p className="card__details-list">
          <strong>Population:</strong> {population}
          <strong>Region:</strong> {region}
          <strong>Capital: </strong>
          {capital.map((cap, index) => (
            <span key={cap + index}>{cap}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Cards;
