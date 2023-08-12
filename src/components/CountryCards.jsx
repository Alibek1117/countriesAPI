import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function CountryCards({ data, searchCountry, filterRegion }) {
    console.log(data);
  return (
    <div className="body__cards container">
      {data && 
        data.filter((item)=>{
            return filterRegion==='all' ? item:item.region.includes(filterRegion) 
        }).filter((item)=>{
            return searchCountry==='' ? item:item.name.common.toLowerCase().includes(searchCountry.toLowerCase())})
            
        .map((item) => {if (!item) {
            return ( <Loader/>)
            // console.log('not found');
        }else{ return (
          <Link to={`single-country/${item.name.common}`} key={item.cioc}>
            <div className="carta">
              <img src={item.flags.png} className="card-img" alt="flag" />
              <div className="card-content">
                <h2 className="title">{item.name.common}</h2>
                <p className="pop__title">
                  <b>Population</b>:{" "}
                  <span className="population">{item.population}</span>
                </p>
                <p className="pop__title">
                  <b>Region</b>: <span className="region">{item.region}</span>
                </p>
                <p className="camita__title">
                  <b>Capital</b>:{" "}
                  <span className="capital">{item.capital}</span>
                </p>
              </div>
            </div>
          </Link>)}} 
        )}
    </div>
  );
}

export default CountryCards;
