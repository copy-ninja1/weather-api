import React from "react";
import { useSelector } from "react-redux";
import Current from "./currentTemp.style";
function CurrentDay() {
  const { weatherData ,temperatureType} = useSelector((state) => state.weather);

  return (
    <Current.Box>
      <Current.Icon src={weatherData?.current?.condition?.icon} />
      <div>
        <Current.Temp>
          {temperatureType === "temp_c" ? weatherData?.current?.temp_c : weatherData?.current?.temp_f}&#176;
        </Current.Temp>
        <span>{temperatureType === "temp_c" ? weatherData?.forecast?.forecastday[0]?.day?.mintemp_c:weatherData?.forecast?.forecastday[0]?.day?.mintemp_f}&#176; /
         {temperatureType === "temp_c" ? weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c:weatherData?.forecast?.forecastday[0]?.day?.maxtemp_f}&#176;</span>
      </div>
    </Current.Box>
  );
}
export default CurrentDay;
