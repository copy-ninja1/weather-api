import React from "react";
import {AiTwotoneCloud} from 'react-icons/ai'
import {Weather} from './dayWeather.style'
function DayWeather({name}) {
  return (
    <div>
      <Weather.Degree>
        <div><AiTwotoneCloud/></div>
        <span>60&#176; / 70&#176;</span>
      </Weather.Degree>
      <Weather.Day>{name}</Weather.Day>
    </div>
  );
}
export default DayWeather;
