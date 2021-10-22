import React from "react";
import Current from "./currentTemp.style";
function CurrentDay() {
  return (
    <Current.Box>
      <Current.Temp>61&#176;</Current.Temp>
      <span>60&#176; / 70&#176;</span>
    </Current.Box>
  );
}
export default CurrentDay;
