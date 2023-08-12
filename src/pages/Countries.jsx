import { useEffect, useRef, useState } from "react";
import "./country.scss";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import CountryCards from "../components/CountryCards";
import search from "../assets/imgs/search.svg";
import Loader from "../components/Loader";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isRegion, setIsRegion] = useState(false);
   const [filterRegion,setFilterRegion] =useState('')
    const [searchCountry,setSearchCountry] =useState('')

    const BASE_URL = `https://restcountries.com/v3.1/all`;
    const { data, loader } = useFetch(BASE_URL);
    
    // const a =data && data.filter((item)=>{ return item.region==='America' && item })
    // console.log(a, 'sdf');
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(searchCountry, filterRegion);
  }


  return (
    <section className="body">
      <div className="container">
        <div className="body__top">
          <div className="search__bar">
            {/* <div className="search__icon">
              <img src={search} alt="search" />
            </div> */}
            <form className="form__search" onSubmit={handleSubmit}>
              <label className="search__label">
                <span className="search__icon">
                  <img src={search} alt="search" />
                </span>
                <input
                  className="search__input"
                  type="search"
                  //   name="searching"
                  placeholder="Search for a country..."
                  //   autoComplete="off"
                  onChange={(e) => {
                    setSearchCountry(e.target.value);
                  }}
                />
              </label>
              <label className="filter__label">
                <select
                  className="regions"
                  onChange={(e) => {
                    setFilterRegion(e.target.value);
                  }}
                >
                  <option className="region" value="all">
                    Filter by region
                  </option>
                  <option className="region" value="all">
                    All
                  </option>
                  <option className="region" value="Africa">
                    Africa
                  </option>
                  <option className="region" value="America">
                    America
                  </option>
                  <option className="region" value="Asia">
                    Asia
                  </option>
                  <option className="region" value="Europe">
                    Euripe
                  </option>
                  <option className="region" value="Oceania">
                    Oceania
                  </option>
                </select>
              </label>
            </form>
          </div>
          {/* <div className="filter__box" onClick={handleFilter}>
            <div className="filter">
              <p className="filter__title">Filter by Region</p>
              <img className="img__light" src={down} alt="down" />
            </div>
            {isRegion && (
              <div className="regions" id="regionId">
                <div className="region africa">Africa</div>
                <div className="region america">America</div>
                <div className="region asia">Asia</div>
                <div className="region europe">Europe</div>
                <div className="region oceania">Oceania</div>
                <div className="region whole">All</div>
              </div>
            )}
          </div> */}
        </div>
        {/* <div className="body__cards container"> */}
        {loader ? (
          <Loader/>
        ) : ( 
          <CountryCards
            data={data}
            searchCountry={searchCountry}
            filterRegion={filterRegion}
          />
        )}
        {/* </div> */}
      </div>
    </section>
  );

        }
export default Countries;
