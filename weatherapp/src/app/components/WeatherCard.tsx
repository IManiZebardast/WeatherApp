"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardContent, CardActions, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Define the Weather interface
interface Weather {
  location: {
    name: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
  };
}

export default function WeatherCard() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [ip, setIp] = useState<string | null>(null);

  const fetchIpAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return null;
    }
  };

  const fetchWeatherData = async (ip: string) => {
    try {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
        params: {
          key: '1394c779a5a348c3b57144806252701',  // My API key
          q: ip,
        },
      });
      return response.data; // Return the data received from the API
    } catch (error) {
      console.error('Error fetching weather data:', error); // Log any errors
      return null; // Return null if there was an error
    }
  };

  useEffect(() => {
    fetchIpAddress().then(ip => {
      if (ip) {
        setIp(ip);
        fetchWeatherData(ip).then(data => {
          if (data) {
            setWeather(data);
          }
        });
      }
    });
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <Card
        sx={{
          maxWidth: { xs: 300, sm: 600, md: 700, lg: 600 },
          width: '100%',
          boxShadow: 10
        }}
      >
        <CardActionArea>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {weather.location.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {weather.current.condition.text}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {weather.current.condition.text}
            </Typography>
            <Typography variant="h6">
              {weather.current.temp_c}°C
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
