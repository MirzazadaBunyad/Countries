import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailCard() {
  const { id } = useParams();

  const [country, setCountry] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => {
        if (response.status === 400) {
          navigate("/country404");
          return;
        }
        return response.json();
      })
      .then((json) => setCountry(json[0]))
      .catch((error) => console.error("Error fetching country data:", error));
  }, [id, navigate]);

  const filteredCountry = country.borders?.filter((item) => item !== "ARM");
  const currency =
    country.currencies && Object.values(country.currencies)[0].name;
  const domain = country.tld && country.tld[0];
  const language = country.languages && Object.values(country.languages)[0];

  return (
    <div
      id="DetailCard"
      className="d-flex flex-column rounded flex-lg-row  align-items-center py-5 my-3"
    >
      <div className="col-lg-6 mb-4 mb-lg-0 px-4">
        <img src={country.flags?.png} alt="" />
      </div>
      <div className="col-lg-6 col-12  px-4">
        <h3 className="mb-3">{country.name?.common}</h3>
        <div className="d-flex flex-column flex-md-row ">
          <ul className="px-0 col-12 col-md-6">
            <li className="mb-1">
              <b>nativeName :</b>
              {country.name?.official}
            </li>
            <li className="mb-1">
              <b>Population : </b> {country.population}
            </li>
            <li className="mb-1">
              <b>Region :</b> {country.region}
            </li>
            <li className="mb-1">
              <b>Sub Region :</b> {country.subregion}
            </li>
            <li className="mb-1">
              <b>Capital :</b> {country.capital}
            </li>
          </ul>
          <ul className="px-0 col-12 col-md-6">
            <li className="mb-1">
              <b>Top Level Domain :</b> {domain}
            </li>
            <li className="mb-1">
              <b>Currencies :</b> {currency}
            </li>
            <li className="mb-1">
              <b>Languages :</b> {language}
            </li>
          </ul>
        </div>
        <h4 className="mb-3">Border Countries: </h4>
        <div className="d-flex flex-wrap gap-3">
          {filteredCountry?.map((item) => (
            <Link key={nanoid()} to={`/country/${item}`}>
              <button className="darkbg border-0 py-2 px-3">{item}</button>
            </Link>
          )) ?? "There are no neighboring countries"}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
