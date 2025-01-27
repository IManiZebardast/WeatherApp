import React from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import { Container } from '@mui/material';
export default function Home(){

    return( 
      <>
      <SearchBar/>
      <Container sx={{height:150}}>
      </Container>
      <WeatherCard/>
      </>
    )
}

