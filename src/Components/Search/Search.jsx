import React, { useState, useEffect } from "react";
import "./Search.css";
import Carditem from "../Card/Carditem";
import Loader from "../Loader/Loader";

const Search = () => {
  const [countryName, setCountryName] = useState("");
  const [data, setData] = useState([]);
  const [continent, setContinent] = useState("Filter By Region");
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(12);

  let fetchItem = async () => {
    setLoading(true);
    let url = "";

    countryName === ""
      ? (url =
          "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,")
      : (url = `https://restcountries.com/v3.1/name/${countryName}`);
    // console.log(url);
    let fetchData = await fetch(url);
    let parsedData = await fetchData.json();
    setData(parsedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchItem();
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    setCountryName(e.target.value);
  };

  const pageClicked = (e) => {
    console.log(currentPage);
    setCurrentPage(e.target.id);
    console.log(currentPage);
  };

  // console.log("data " + data[0]?.capital);
  // console.log(data.filter((d) => typeof d.capital === "undefined"));

  const indexofLastCountryPage = currentPage * countryPerPage;
  const indexofFirstCountryPage = indexofLastCountryPage - countryPerPage;

  const currentData = data.slice(
    indexofFirstCountryPage,
    indexofLastCountryPage
  );

  // console.log(currentData);

  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(data.length / countryPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  const showPageNumbers = pageNumbers.map((p) => (
    <span key={p} id={p} onClick={pageClicked} className="pageNumbers">
      {p}
    </span>
  ));

  return (
    <div className="countries__search section__padding flex__column">
      <div className="countries__search__form flex__row">
        <div className="countries__search__form-input">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search for a country..."
              value={countryName}
              onChange={changeHandler}
            />
          </form>
        </div>
        <div>
          <select
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          >
            <option value="Africa"> Africa</option>
            <option value="America"> America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <Loader enable={Loading} />
      <div className="container">
        <div className="row">
          {currentData.map((country, index) => (
            <div key={country + index} className="flex__column col-md-3">
              <Carditem
                array={country}
                names={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                img={country.flags.png}
              />
            </div>
          ))}
        </div>
        <div className="pagination">{showPageNumbers}</div>
        {/* <button onClick={previousPage}>Previous</button>
        <button onCanPlay={nextPage}>Next</button> */}
      </div>
    </div>
  );
};

export default Search;
