import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries";
import Header from "./components/Header";
import SingleCountry from "./pages/SingleCountry";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element ={<Countries/>}/>
        <Route path="/single-country/:name" element ={<SingleCountry/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
