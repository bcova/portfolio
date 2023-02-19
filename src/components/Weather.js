import React, { useEffect, useState } from "react";
import axios from "axios";


function Weather() {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);
  const [latt,setLat] = useState(0);
  const [lon,setLong] = useState(0);
//   const [loading,setLoading] = useState()


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
  } else {
      alert('GeoLocation needed to display weather on navbar.');
  }

  function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    setLat(Number(parseFloat(lat).toFixed(4)))
    setLong(Number(parseFloat(long).toFixed(4)))
  }
  
  if(latt !== 0){
    axios(
      `https://api.open-meteo.com/v1/forecast?latitude=${latt}&longitude=${lon}&hourly=temperature_2m&models=best_match&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
      ).then((response) => {
        setError(null);
        setWeather(response.data.current_weather.temperature);
      })
      .catch(setError);
    }else{
        setWeather(<div className="lds-dual-ring"></div>)
    }
    }, [latt, lon]);
  if (error) return <p>An error occurred</p>;



  return (
    <div className=" text-lg inline-block ml-2">
{weather}   
    </div>
  );
}

export default Weather;
