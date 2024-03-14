
import { useState } from 'react';
import './App.css'
import { weatherApiKey, weatherApiUrl } from './api';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [currentForecast, setCurrentForecast] = useState(null)

const handleOnSearchChange = (searchData) => {
  const [lat, lon] = searchData.value.split(" ");

  const currentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`)
  const forecastFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`)

  Promise.all([currentWeatherFetch, forecastFetch])
  .then(async(response) => {
    const weatherResponse = await response[0].json()
    const forecastResponse = await response[1].json()

    setCurrentWeather({city: searchData.label, ...weatherResponse})
    setCurrentForecast({city: searchData.label, ...forecastResponse})
  })

  console.log(currentWeather)
  console.log(currentForecast)


  // console.log(searchData);
}
  return (
    <div className='max-w-5xl mt-5 mb-5 ml-auto mr-auto'>
     <Search onSearchChange={handleOnSearchChange}/>
       {currentWeather && <CurrentWeather data={currentWeather} />} 
    </div>
  )
}

export default App
