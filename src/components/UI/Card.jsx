import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Card({ name, population, flags, region, capital, cca3 }) {
  const {color} = useContext(ThemeContext);
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 p-sm-4 p-5">
      <Link to={`/country/${cca3}`}>
        <div className="Card card text-start">
          <img className="card-img-top" src={flags.png} alt="Title" />
          <div className={`card-body ${color ? "darkbg" : "lightbg"}`}>
            <h1 className=" size mb-3">{name.common}</h1>
            <p className="card-text mb-1">
              <b>Population:</b> {population}
            </p>
            <p className="card-text mb-1">
              <b>Region:</b> {region}
            </p>
            <p className="card-text mb-1">
              <b>Capital:</b> {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
