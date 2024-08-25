import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import Filter from "../components/functional/Filter";
import Card from "../components/UI/Card";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const [data, setData] = useState([]);
  const [showMore, setshowMore] = useState(12);
  const {color} = useContext(ThemeContext);

  const { select, search } = useContext(DataContext);

  const filteredData = () => {
    return data
      .filter((item) => item.name.common !== "Armenia")
      .filter((item) => (select === "All" ? item : item.region === select))
      .filter((item) => item.name.common.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  };

  const loadMoreCountries = () => {
    setshowMore((prevCount) => prevCount + 12);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <Filter data={data} setData={setData} />
      <div className="d-flex flex-wrap py-3">
        {filteredData()
          .slice(0, showMore)
          .map((item) => (
            <Card key={nanoid()} {...item} />
          ))}
      </div>
      {showMore < filteredData().length && (
        <div className="d-flex justify-content-center py-3">
          <button  className={`${color ? "darkbg" : "lightbg"} py-2 px-3 rounded-1 border-1 border-white`}
            onClick={loadMoreCountries}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
