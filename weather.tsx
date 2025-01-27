import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/system';

const WeatherCard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <Card
        sx={{
          maxWidth: { xs: 300, sm: 600, md: 700, lg: 600 },
          width: '100%',
          boxShadow: 10,
          backdropFilter: 'blur(8px)', // Optional: adds a blur effect to the card itself (if you want)
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random" // Placeholder image for the weather card
            alt="weather icon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sunny
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Clear skies with a light breeze
            </Typography>
            <Typography variant="h6">
              25°C
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More Info
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default WeatherCard;
