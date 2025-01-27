import React from 'react';
import SearchBar from '../components/SearchBar'; // Import SearchBar component
import WeatherCard from '../components/WeatherCard'; // Import WeatherCard component
import { Box } from '@mui/system';

const Home: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {/* Search bar at top center */}
      <SearchBar />
      
      {/* Card in the center of the screen with blurred background */}
      <WeatherCard />
      
      {/* Background with blur effect */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://source.unsplash.com/random)', // Example random background image
          backgroundSize: 'cover',
          filter: 'blur(8px)',
          zIndex: -1
        }}
      />
    </Box>
  );
}

export default Home;
