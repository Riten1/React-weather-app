import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading
} from "react-accessible-accordion";

const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const Forecast = ({ data }) => {
  const days = new Date().getDay();
const forecastDays =  week.slice(days, week.length).concat(week.slice(0, days))
console.log(forecastDays)
  return (
    <>
      <label className="text-2xl font-bold text-left">Forecast for next 7 days</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="rounded-2xl h-10 m-1.5 shadow-md items-center flex cursor-pointer text-sm pt-1 pb-1 pl-5 pr-5">
                  <img className="w-10" alt="weather" src={`images/${item.weather[0].icon}.png`}></img>
                  <label className="flex-1 font-semibold ml-3.5 text-left">{forecastDays[idx]}</label>
                  <label className="flex-1 mr-3.5 text-right">{item.weather[0].description}</label>
                  <label className="text-gray-500">{Math.round(item.main.temp_min - 273.15)}°C / {Math.round(item.main.temp_max - 273.15)}°C</label>

                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="text-xs flex justify-between">
                <div className="text-right ">
                  <label className="text-gray-500">Pressure: </label>
                  <label>{item.main.pressure} hPa</label>
                </div>

                <div className="text-right">
                  <label className="text-gray-500">Humidity: </label>
                  <label>{item.main.humidity} %</label>
                </div>

                <div className="text-right">
                  <label className="text-gray-500">Clouds: </label>
                  <label>{item.clouds.all} %</label>
                </div>

                <div className="text-right">
                  <label className="text-gray-500">Speed: </label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="text-right">
                  <label className="text-gray-500">Sea level: </label>
                  <label>{item.main.sea_level} m</label>
                </div>

                <div className="text-right">
                  <label className="text-gray-500">Feels like: </label>
                  <label>{Math.round(item.main.feels_like - 273.15)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
