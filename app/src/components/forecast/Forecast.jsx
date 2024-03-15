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
      <label className="text-2xl font-bold">Forecast for next 7 days</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div>
                  <img alt="weather" src={`images/${item.weather[0].icon}.png`}></img>
                  <label className="">{forecastDays[idx]}</label>
                  <label>{item.weather[0].description}</label>
                  <label>{Math.round(item.main.temp_min - 273.15)}°C / {Math.round(item.main.temp_max - 273.15)}°C</label>

                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
