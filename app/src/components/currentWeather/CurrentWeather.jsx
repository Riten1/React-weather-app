import React from 'react'


const CurrentWeather = ({data}) => {
  return (
    <div className='w-80 rounded-md shadow-md ml-auto mr-auto mb-0 mt-5 pt-0 pl-5 pb-5 pr-5'>
      <div className='flex justify-between items-center'>
        <div>
        <p className='font-semibold text-lg leading-3 m-0 '>{data.city}</p>
        <p className='font-normal text-sm m-0'>{data.weather[0].description}</p>
        </div>
        <img alt='weather' src={`images/${data.weather[0].icon}.png`} className='w-24'></img>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-7xl w-auto mt-2.5 mb-2.5 ml-0 mr-0'>
          {(data.main.temp - 273.15).toFixed(0)}°C
        </p>
        <div className='w-full pl-5'>
          <div className='flex justify-between'>
            <span className='text-left font-normal text-xs'>Details</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-left font-normal text-xs'>Feels like</span>
            <span className='text-right font-semibold text-xs'>{(data.main.feels_like - 273.15).toFixed(0)}°C</span>

          </div>
          <div className='flex justify-between'>
            <span className='text-left font-normal text-xs'>Wind</span>
            <span className='text-right font-semibold text-xs'> 2m/s</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-left font-normal text-xs'>Humidity</span>
            <span className='text-right font-semibold text-xs'>{data.main.humidity}%</span>
            </div>

            <div className='flex justify-between'>
            <span className='text-left font-normal text-xs'>Pressure</span>
            <span className='text-right font-semibold text-xs'>{data.main.pressure}hPa</span>
          </div>
            
          
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather