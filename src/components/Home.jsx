import React from "react";
import { API_KEY } from "./API_KEY";

import Search from "./Search";
import '../style/index.css';

const Home = () => {
  /* const api = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${API_KEY}`;
  
  const api = `http://api.openweathermap.org/geo/1.0/direct?q=madrid&limit=1&appid=${API_KEY}`;
  fetch(api)
    .then((respo) => respo.json())
    .then(data => {
      console.log(data);
    }) */
  return (
    <div>
      <Search/>
    </div>
  )
}

export default Home;