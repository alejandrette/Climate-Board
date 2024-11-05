import React, { useEffect, useState } from 'react'
import { API_KEY } from './API_KEY';
import '../style/search.css';
import Weather from './Weather';

const Search = ({ onMainChange }) => {
  const messageError = 'The city was not found';
  const [valueCityInput, setValueCityInput] = useState('Valladolid'); // Value Default

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const [nameCity, setNameCity] = useState(''); // Name city
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

  const [idCountry, setIdCountry] = useState(''); // Gb, Es...

  const searchCity = () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${valueCityInput}&appid=${API_KEY}`;
    fetch(api)
      .then((respo) => {
        if (respo.ok) {
          return respo.json();
        }
      })
      .then(data => {
        if (data) {
          setLon(data.coord.lon);
          setLat(data.coord.lat);

          setNameCity(data.name);
          setDescriptionCity(data.weather[0].description);
          setIcon(data.weather[0].icon);
          onMainChange(data.weather[0].main)

          setTemp(data.main.temp - 273.15);
          setFeelsLike(data.main.feels_like - 273.15);
          setTempMin(data.main.temp_min - 273.15);
          setTempMax(data.main.temp_max - 273.15);
          setPressure(data.main.pressure);
          setHumidity(data.main.humidity);

          setVisibility(data.visibility);
          setClouds(data.clouds.all);
          setWindSpeed(data.wind.speed);

          setIdCountry(data.sys.country);
        } else {
          document.querySelector('.messageError').classList.remove('visually-hidden');
        }
      })
      .catch(error => console.error('Error al obtener los datos: ', error));
  }

  const handleInputChange = event => {
    setValueCityInput(event.target.value);
  }

  const handleKeyDown = e => {
    if(e.key === 'Enter'){
      searchCity();
    }
  }

  useEffect(() => {
    searchCity();
  }, []);

  const hiddenMenssageError = () => document.querySelector('.messageError').classList.add('visually-hidden');

  return (
    <div className='text-white p-4'>
      <div className="bg-secondary bg-opacity-75 border border-light rounded p-5">
        <h1 className="text-center mb-4">Weather App</h1>
        <div className="mb-4">
          <input
            type="text"
            id="cityInput"
            className="form-control border-light text-light"
            onClick={hiddenMenssageError}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='Search city'
          />
        </div>
        <div className='messageError visually-hidden'>{messageError}</div>
      </div>

      <Weather
        nameCity={nameCity}
        descriptionCity={descriptionCity}
        icon={icon}
        temp={temp}
        feelsLike={feelsLike}
        tempMin={tempMin}
        tempMax={tempMax}
        pressure={pressure}
        humidity={humidity}
        visibility={visibility}
        clouds={clouds}
        windSpeed={windSpeed}
        idCountry={idCountry}
        lat={lat}
        lon={lon}
      />
    </div>
  )
}

export default Search;
