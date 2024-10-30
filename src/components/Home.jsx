import React, { useState } from "react";
import Search from "./Search";
import '../style/index.css';

const Home = () => {
  const [main, setMain] = useState('');

  const handleMainChange = mainCity => {
    setMain(mainCity);
  }

  return (
    <div className={`${main}`}>
      <Search onMainChange={handleMainChange}/>
    </div>
  )
}

export default Home;