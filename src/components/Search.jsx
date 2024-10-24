import React, { useEffect, useState } from 'react'
import { API_KEY } from './API_KEY';
import { IoSearch } from "react-icons/io5";
import '../style/search.css';

export default function Search() {
  const messageError = 'The city was not found';
  const degreesCentigrade = '°C'
  const [valueCityInput, setValueCityInput] = useState('Norway'); // Value Default

  const [nameCity, setNameCity] = useState(''); // Name city
  const [mainCity, setMmainCIty] = useState(''); // Type Weather (clouds, sun, rain...)
  const [descriptionCity, setDescriptionCity] = useState(''); // Description (scattered clouds)
  const [icon, setIcon] = useState(''); // Icon

  const [temp, setTemp] = useState(''); // Temp in Kelvin (-273,15)
  const [feelsLike, setFeelsLike] = useState(''); // Temp feels like
  const [tempMin, setTempMin] = useState(''); // Temp min
  const [tempMax, setTempMax] = useState(''); // Temp max
  const [pressure, setPressure] = useState(''); // Presión in hPa
  const [humidity, setHumidity] = useState(''); // Humdity in %

  const [visibility, setVisibility] = useState(''); // Visibility in metres
  const [clouds, setClouds] = useState(''); // % of clouds

  const [windSpeed, setWindSpeed] = useState(''); // Speed wind m/s
  const [windDeg, setWindDeg] = useState(''); // Deg in grades º

  const [idCountry, setIdCountry] = useState(''); // Gb, Es...
  const [sunrise, setSunrise] = useState(''); // Hora de salida del sol en segundos UNIX
  const [sunset, setSunset] = useState(''); // Hora de puesta del sol en segundos UNIX


  const searchCity = () => {
    setValueCityInput(document.getElementById('cityInput').value);
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${valueCityInput}&appid=${API_KEY}`;
    fetch(api)
      .then((respo) => {
        if (respo.ok) {
          return respo.json();
        }
      })
      .then(data => {
        if (data) {       
          setNameCity(data.name);
          setMmainCIty(data.weather[0].main);
          setDescriptionCity(data.weather[0].description);
          setIcon(data.weather[0].icon);

          setTemp(data.main.temp - 273.15);
          setFeelsLike(data.main.feels_like - 273.15);
          setTempMin(data.main.temp_min - 273.15);
          setTempMax(data.main.temp_max - 273.15);
          setPressure(data.main.pressure);
          setHumidity(data.main.humidity);

          setVisibility(data.visibility);
          setClouds(data.clouds.all);

          setWindSpeed(data.wind.speed);
          setWindDeg(data.wind.deg);
          
          setIdCountry(data.sys.country);
          setSunrise(data.sys.sunrise);
          setSunset(data.sys.sunset);
        } else {
          document.querySelector('.messageError').classList.remove('visually-hidden');
        }
      })
      .catch(error => console.error('Error al obtener los datos: ',error));
  }

  const hiddenMenssageError = () => document.querySelector('.messageError').classList.add('visually-hidden');
  
  window.addEventListener("load", () => searchCity());

  return (
    <div>
      <div className="container">
        <div className='d-flex'>
          <input type="text" className="form-control" id="cityInput" onClick={hiddenMenssageError} placeholder='Search city'/>
          <button onClick={searchCity} type='button' className='btn btn-info'><IoSearch /></button>
        </div>
        <div className='messageError m-auto mt-3 visually-hidden'>{messageError}</div>
      </div>

      <div className='bg-light'>
        {nameCity}, {Math.round(temp * 100) / 100 + degreesCentigrade}
      </div>
    </div>
  )
}
