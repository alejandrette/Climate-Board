import React, { useEffect, useState } from 'react'
import { API_KEY } from './API_KEY';
import { Tornado, Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, Umbrella, Sunrise, Sunset } from 'lucide-react'
import '../style/search.css';

const Search = () => {
  const messageError = 'The city was not found';
  const degreesCentigrade = '°C';
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
      .catch(error => console.error('Error al obtener los datos: ', error));
  }

  const handleInputChange = event => {
    setValueCityInput(event.target.value);
  }

  useEffect(() => {
    searchCity();
  }, []);

  const hiddenMenssageError = () => document.querySelector('.messageError').classList.add('visually-hidden');

  return (
    <div className={`text-white  p-4 mt-3 m-5`}>
      <div className="bg-info bg-opacity-10 border border-light rounded p-5">
        <h1 className="text-center mb-4">Weather App</h1>
        <div className="mb-4">
          <input
            type="text"
            id="cityInput"
            className="form-control border-light text-light"
            onClick={hiddenMenssageError}
            onChange={handleInputChange}
            placeholder='Search city'
          />
          <button onClick={searchCity} type='button' className='btn p-2'>
            Buscar
          </button>
        </div>
        <div className='messageError visually-hidden'>{messageError}</div>
      </div>

      <div className="bg-info bg-opacity-10 border border-light rounded p-4 mt-3">
        <div className="">
          <h2 className="">{nameCity} - {idCountry}</h2>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" className="icon-img" />
        </div>

        <div className="weather-info">
          <div className="temperature">
            <div className="temp">{Math.round(temp)}{degreesCentigrade}</div>
          </div>
          <div className="description">
            <div className='fs-3 text-end'>{descriptionCity.charAt(0).toUpperCase() + descriptionCity.slice(1)}</div>
            <div className="temp-range">
              <div>
                <Thermometer className="text-danger"/>
                <span>Max: {Math.round(tempMax)}{degreesCentigrade}</span>
              </div>
              <div>
                <Thermometer className="text-info"/>
                <span>Min: {Math.round(tempMin)}{degreesCentigrade}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center mb-2">
              <Thermometer className="me-2 text-danger" />
              <span>Feels like: {Math.round(feelsLike)}{degreesCentigrade}</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Droplets className="me-2 text-primary" />
              <span>Humidity: {humidity}%</span>
            </div>
            <div className="d-flex align-items-center">
              <Wind className="me-2 text-secondary" />
              <span>Wind: {windSpeed} m/s</span>
            </div>
          </div>

          <div className="col-6 mb-3">
            <div className="d-flex align-items-center mb-2">
              <Umbrella className="me-2 text-info" />
              <span>Clouds: {clouds}%</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Thermometer className="me-2 text-danger" />
              <span>Pressure: {pressure} hPa</span>
            </div>
            <div className="d-flex align-items-center">
              <Sun className="me-2 text-warning" />
              <span>Visibility: {visibility} km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;


{/* <div className="flex items-center">
            <Sunrise className="w-5 h-5 mr-2 text-orange-400" />
            <span>Sunrise: {sunrise}</span>
          </div>
          <div className="flex items-center">
            <Sunset className="w-5 h-5 mr-2 text-red-400" />
            <span>Sunset: {sunset}</span>
          </div> */}