# 🌦️ Weather App

Weather App is an interactive application built with React that allows users to search for and view current weather conditions for any city in the world. It leverages the OpenWeather API to fetch weather data and displays the information in a visually appealing, user-friendly interface designed with Bootstrap. Additionally, it includes a dynamic map that shows the geographical location of the searched city.

## 🌟 Features

- **🔍 City Search**: Search any city worldwide to get its current weather data.
- **🌡️ Weather Data**: Displays temperature, minimum and maximum temperatures, feels-like temperature, humidity, pressure, visibility, wind speed, and cloud coverage.
- **🗺️ Interactive Map**: Shows the city’s location on a dynamic OpenStreetMap map, automatically centered on the selected city.
- **📉 User-Friendly Interface**: Clean, organized design using React and Bootstrap for an optimized user experience.
- **🛠️ Real-Time Updates**: Weather data refreshes in real time with each new search.

## 🛠️ Technologies Used

- **React**: For building the user interface and state management.
- **Bootstrap**: For custom styling and responsive design.
- **OpenWeather API**: To retrieve real-time weather data.
- **React-Leaflet**: To integrate dynamic maps into the project.
- **Fetch API**: For making requests to the OpenWeather API and retrieving weather information.

## 🚀 Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/tu-usuario/weather-app.git
```

2. Navigate to the project directory:

```bash
cd weather-app
```

3. Install the dependencies:

```bash
npm install
```

4. Set up the OpenWeather API by adding your API key in a file named `API_KEY.js`:

```javascript
export const API_KEY = 'TU_API_KEY';
```

5. Start the application:

```bash
npm start
```

## 🧑‍💻 Usage

1. Enter the name of the city you want to search for in the search bar.
2. Press "Enter" to perform the search.
3. The app will display:
   - Current temperature
   - Feels-like temperature
   - Minimum and maximum temperatures
   - Humidity, atmospheric pressure, visibility, wind speed, and cloud coverage
4. The city’s location will appear on the interactive map to the right of the weather data.

## 📁 Project Structure

- **Home**: Main component containing the app's theme state.
- **Search**: Search component for looking up cities and fetching weather data from the API.
- **Weather**: Component displaying detailed weather information and the interactive map.
- **Map**: Component showing a dynamic map of the searched city using Leaflet.
- **styles**: Folder with CSS files for custom styling of the user interface.

## 🔮 Future Features

- 📆 Weather history for the selected city.
- 📊 Interactive weather graphs.
- 🌎 Map view with different styles (satellite view, dark mode, etc.).

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature-nueva
```

3. Make your changes and commit them:

```bash
git commit -m "Descripción de los cambios"
```

4. Push to your branch:

```bash
git push origin feature-nueva
```

5. Open a Pull Request and describe your changes.

## 👤 Author

This project was created by [@alejandrette](https://github.com/alejandrette). Feel free to contact me via GitHub with any questions or suggestions.

## 📜 License

This project is licensed under the MIT License.
