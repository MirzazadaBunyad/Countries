import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { DataContext } from "../../context/DataContext";
import { ThemeContext } from "../../context/ThemeContext";

function Filter({ data }) {
  const { select, setSelect,  setSearch } = useContext(DataContext);
  const [showNoCountry, setShowNoCountry] = useState(false);
  const { color } = useContext(ThemeContext);

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    setShowNoCountry(
      data.every(
        (item) =>
          !item.name.common.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const regions = [...new Set(data.map((item) => item.region))];
  const regionOptions = regions.map((region) => (
    <option className="center" key={nanoid()} value={region}>
      {region}
    </option>
  ));

  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-3 py-3 px-sm-4 px-5 flex-md-row ">
        <div
          id="SearchBar"
          className={`${
            color ? "darkbg" : "lightbg"
          } border gap-2 py-2 px-3 d-flex align-items-center`}
        >
          <FiSearch />
          <input
            onChange={handleSearch}
            id="Search"
            placeholder="Search for a country..."
            type="text"
            className={`${color ? "text-white" : "text-black"}  p-1 border-0`}
          />
        </div>
        {
          <select
            onChange={handleSelect}
            id="Regions"
            value={select}
            className={`${color ? "darkbg" : "lightbg"} ${
              color ? "text-white" : "text-black"
            } py-2 center`}
          >
            <option value="All">All</option>
            {regionOptions}
          </select>
        }
      </div>
        <div className="text-center p-1">
          {showNoCountry && <p className="py-5 display-6">There is no such country</p>}
        </div>
    </>
  );
}

export default Filter;
