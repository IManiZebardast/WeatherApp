import axios from 'axios';

const fetchWeatherData = async () => {
  try {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        key: '1394c779a5a348c3b57144806252701',  // Your API key
        q: 'London',
      },
    });
    return response.data; // Return the data received from the API
  } catch (error) {
    console.error('Error fetching weather data:', error); // Log any errors
    return null; // Return null if there was an error
  }
};

const WeatherPage = ({ weather }) => {
  if (!weather) {
    return <div>Unable to fetch weather data.</div>;
  }

  return (
    <div>
      <h1>Weather in {weather.location.name}</h1>
      <p>{weather.current.temp_c}°C</p>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
    </div>
  );
};

export async function getServerSideProps() {
  const weather = await fetchWeatherData(); // Fetch the data using async/await

  return {
    props: {
      weather, // Pass the fetched weather data as a prop to the page component
    },
  };
}

export default WeatherPage;
