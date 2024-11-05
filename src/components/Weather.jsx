import React from 'react';
import { Sun, Wind, Droplets, Thermometer, Umbrella } from 'lucide-react';
import Map from './Map';

const Weather = ({ nameCity, descriptionCity, icon, temp, feelsLike, tempMin, tempMax, pressure, humidity, visibility, clouds, windSpeed, idCountry, lat, lon }) => {
  const degreesCentigrade = '°C';

  return (
    <div className="bg-secondary bg-opacity-75 border border-light rounded p-4 mt-3 d-flex">
      <div className="weather-info-left me-3" style={{ flex: 1 }}>
        <div>
          <h2>{nameCity} - {idCountry}</h2>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" className="icon-img" />
        </div>

        <div className="temperature">
          <div className="temp">{Math.round(temp)}{degreesCentigrade}</div>
          <div className='fs-3 text-end'>{descriptionCity.charAt(0).toUpperCase() + descriptionCity.slice(1)}</div>
          <div className="temp-range justify-content-end">
            <Thermometer className="text-danger"/>
            <span>Max: {Math.round(tempMax)}{degreesCentigrade}</span>
            <Thermometer className="text-info"/>
            <span>Min: {Math.round(tempMin)}{degreesCentigrade}</span>
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
              <Wind className="me-2 text-dark" />
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

      <div style={{ flex: 1 }}>
        <Map lat={lat} lon={lon} />
      </div>
    </div>
  );
}

export default Weather;
