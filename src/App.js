// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
// import axios from 'axios';
import Weather from "./Components/Weather"

function App() {
  const [ lat, setLat ] = useState([]);
  const [ long, setLong ] = useState([]);
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Latitude is :", lat);
    console.log("longitude is :", long);;

    });

    // await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${23.2654928}&lon=${77.4694167}&APPID=${process.env.REACT_APP_API_KEY}`)
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=23.1931904&lon=79.9932416&appid=34cc5356368db2acf617ded9a0a22ce7`)
    .then(response => response.json())
     .then(result => {
      setData(result)
      console.log(result);
     });
    }

     fetchData();
    
  }, [lat, long]);
  
  
  return (
    <div className="App">
      {(typeof data.main !='undefined') ? (
        <Weather weatherData ={data} />
      ) : (
        <div></div>
      )}
      
    </div>
  );
}

export default App;
