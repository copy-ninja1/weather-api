import React from "react";
import Current from "./currentTemp.style";
function CurrentDay({ weatherData, tempType }) {
  return (
    <Current.Box>
      <Current.Icon src={weatherData?.condition?.icon} />
      <div>
        <Current.Temp>
          {tempType === "c" ? weatherData?.temp_c : weatherData?.temp_f}&#176;
        </Current.Temp>
      </div>
    </Current.Box>
  );
}
export default CurrentDay;
