import './Header.scss'
import moon from "../assets/imgs/moon.svg";
import sun from "../assets/imgs/sun.svg";
import { useState } from 'react';

function Header() {
const [dark, setDark] = useState({
  img: "dark__mode__img",
  title: "dark__title"
});
const [light, setLight] = useState({
  img: "light__mode__img",
  title: "light__title",
});

const modeLocal = localStorage.getItem('mode')
if (modeLocal) {
    document.querySelector("body").classList.add("dark-mode");
    
}

    const darkMode =()=>{
        setDark({
            img:'hidden',
            title:'hidden'
        })
        document.querySelector('body').classList.add('dark-mode')
        localStorage.setItem("mode", 'dark');
    }
    const lightMode =()=>{
        setDark({
          img: "dark__mode__img",
          title: "light__title",
        });
        document.querySelector("body").classList.remove("dark-mode");
        localStorage.setItem('mode', '')
    }

  return (
    <div className="header">
      <div className="container">
        <h2 className="head__title">Where is the world?</h2>
        <div className="dark__mode">
          <div className="mode__imgs">
            <img className={dark.img} src={moon} alt="moon" />
            <img className="light__mode__img" src={sun} alt="sun" />
          </div>
          <div className="mode__titles">
            <h4 className={dark.title} onClick={darkMode}>
              Dark Mode
            </h4>
            <h4 className="light__title" onClick={lightMode}>
              Light Mode
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header