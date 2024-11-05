# 🌦️ Weather App

Weather App es una aplicación interactiva en React que permite buscar y consultar el clima actual de cualquier ciudad en el mundo. Utiliza la API de OpenWeather para obtener datos meteorológicos y muestra la información en una interfaz visualmente atractiva y fácil de usar, creada con Bootstrap. Además, incluye un mapa dinámico que muestra la ubicación geográfica de la ciudad buscada.

## 🌟 Características

- **🔍 Buscador de Ciudades**: Busca cualquier ciudad en el mundo para obtener su clima actual.
- **🌡️ Datos Meteorológicos**: Muestra temperatura, temperatura mínima y máxima, sensación térmica, humedad, presión, visibilidad, velocidad del viento, y cobertura de nubes.
- **🗺️ Mapa Interactiv**o: Ubicación de la ciudad en un mapa dinámico de OpenStreetMap, centrado automáticamente en la ciudad seleccionada.
- **📉 Interfaz Amigable**: Diseño limpio y organizado utilizando React y Bootstrap para una experiencia de usuario optimizada.
- **🛠️ Actualización en Tiempo Real**: Los datos meteorológicos se actualizan en tiempo real al hacer una nueva búsqueda.

## 🛠️ Tecnologías Utilizadas

- **React**: Para la creación de la interfaz de usuario y manejo del estado.
- **Bootstrap**: Estilos personalizados y diseño responsivo.
- **OpenWeather API**: Para obtener datos meteorológicos en tiempo real.
- **React-Leaflet**: Para integrar mapas dinámicos en el proyecto.
- **Fetch API**: Para realizar peticiones a la API de OpenWeather y obtener la información de clima.

## 🚀 Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/weather-app.git
```

2. Accede al directorio del proyecto:

```bash
cd weather-app
```

3. Instala las dependencias:

```bash
npm install
```

4. Configura la API de OpenWeather agregando tu API key en un archivo API_KEY.js:

```javascript
export const API_KEY = 'TU_API_KEY';
```

5. Inicia la aplicación:

```bash
npm start
```

## 🧑‍💻 Uso

1. Ingresa el nombre de la ciudad que deseas buscar en la barra de búsqueda.
2. Presiona "Enter" para ejecutar la búsqueda.
3. La aplicación mostrará:
  Temperatura actual
  Sensación térmica
  Temperaturas mínima y máxima
  Humedad, presión atmosférica, visibilidad, velocidad del viento y porcentaje de nubes
4. La ubicación de la ciudad se mostrará en el mapa interactivo a la derecha de los datos meteorológicos.

## 📁 Estructura del Proyecto

- **Home**: Componente principal que contiene el estado del tema de la aplicación.
- **Search**: Componente de búsqueda que permite buscar ciudades y obtener información meteorológica de la API.
- **Weather**: Componente que muestra la información detallada del clima y el mapa interactivo.
- **Map**: Componente que muestra un mapa dinámico de la ciudad buscada utilizando Leaflet.
- **styles**: Carpeta con archivos CSS para personalizar la interfaz de usuario.

## 🔮 Funcionalidades Futuras

- 📆 Historial de clima para la ciudad seleccionada.
- 📊 Gráficos meteorológicos interactivos.
- 🌎 Vista del mapa en diferentes estilos (mapa satelital, modo oscuro, etc.).

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama:

```bash
git checkout -b feature-nueva
```

3. Realiza tus cambios y haz un commit:

```bash
git commit -m "Descripción de los cambios"
```

4. Haz push a tu rama:

```bash
git push origin feature-nueva
```

5. Abre un Pull Request y describe tus cambios.

## 👤 Autor

Este proyecto fue creado por [@alejandrette](https://github.com/alejandrette). Si tienes preguntas o sugerencias, no dudes en contactarme en mi perfil de GitHub.

## 📜 Licencia

Este proyecto está bajo la licencia MIT.
