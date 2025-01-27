import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const WeatherCard = () => {
    return (
        <Card sx={{ 
            maxWidth: { xs: 300, sm: 600, md: 700, lg: 600 },
            width: '100%',
            boxShadow: 10,
            backdropFilter: 'blur(8px)',
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="path/to/image.jpg" // Add the correct image path
                    alt="Weather image" // Add a descriptive alt text
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
        </Card>
    );
};

export default WeatherCard;
