import React from "react";
import Current from "./currentTemp.style";
function CurrentDay({ weatherData, tempType }) {
  return (
    <Current.Box>
      <Current.Icon src={weatherData?.current?.condition?.icon} />
      <div>
        <Current.Temp>
          {tempType === "temp_c" ? weatherData?.current?.temp_c : weatherData?.current?.temp_f}&#176;
        </Current.Temp>
        <span>{tempType === "temp_c" ? weatherData?.forecast?.forecastday[0]?.day?.mintemp_c:weatherData?.forecast?.forecastday[0]?.day?.mintemp_f}&#176; /
         {tempType === "temp_c" ? weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c:weatherData?.forecast?.forecastday[0]?.day?.maxtemp_f}&#176;</span>
      </div>
    </Current.Box>
  );
}
export default CurrentDay;
