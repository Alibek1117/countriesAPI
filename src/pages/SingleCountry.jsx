import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { v4 as uuidv4 } from 'uuid';
import './SingleCountry.scss'
import left from '../assets/imgs/left.svg'
import Loader from "../components/Loader";


function SingleCountry() {
    const {name} =useParams()
    
    const { data, loader} = useFetch(`https://restcountries.com/v3.1/name/${name}`);
    // console.log(item);
//   console.log(data.title)
//    if(loader) {return(
//      <h1>LOADING . . .</h1>
//     )}
  return (
    <>
      {loader?(
        <Loader/>
        ): data &&
        data?.map((item) => (
          <section className="body single__body" key={uuidv4}>
            <div className="container">
              <Link to='/'>
                <span className="btn__back">
                  <img src={left} width={30} alt="left" />
                  <span className="back__title">Back</span>
                </span>
              </Link>
              <div className="country__info">
                <div className="left">
                  <img src={item.flags.png} alt="" />
                </div>
                <div className="right">
                  <div className="top">
                    <div className="top__left">
                      <h3 className="single__count__name">
                        {item.name.common}
                      </h3>
                      <div className="native__name single__class">
                        <b>Native Name: </b>
                        {item.nativeName}
                      </div>
                      <div className="population single__class">
                        <b>Population: </b>
                        {item.population}
                      </div>
                      <div className="region single__class">
                        <b>Region: </b>
                        {item.region}
                      </div>
                      <div className="sub__region single__class">
                        <b>Sub Region: </b>
                        {item.subregion}
                      </div>
                      <div className="capital single__class">
                        <b>Capital: </b>
                        {item.capital}
                      </div>
                    </div>
                    <div className="top__right">
                      <div className="tld single__class">
                        <b>Top Level Domain: </b>
                        {item.tld}
                      </div>
                      <div className="currancies single__class">
                        <b>Currancies: </b>
                        {Object.values(item.currencies)[0].name}
                      </div>
                      <div className="languages single__class">
                        <b>Languages: </b>
                        {Object.values(item.languages)}
                      </div>
                    </div>
                  </div>
                  <div className="bottom"></div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}

export default SingleCountry