import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/system';

export default function WeatherCard(){
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
            <Card 
                sx={{
                    maxWidth: { xs: 300, sm: 400, md: 500, lg: 600 },
                    width: '100%',
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            lorem
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}
