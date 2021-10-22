import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { fetchWeather, setCurrentLocation } from "../store/weatherSlice";

function SelectLocation() {
  const dispatch = useDispatch();
  const { currentLocation } = useSelector((state) => state.weather);

  // const [currentLocation, setCurrentLocation] = React.useState("Abuja");
  const options = ["Delhi", "Lagos", "Mexico"];
  const handleLocationChange = (e) => {
    // console.log({ e });
    dispatch(setCurrentLocation(e.value));
  };

  React.useEffect(() => {
    dispatch(fetchWeather(currentLocation));
  }, [currentLocation]);

  return (
    <Dropdown
      options={options}
      onChange={handleLocationChange}
      value={currentLocation}
      placeholder="Select your loaction"
    />
  );
}
export default SelectLocation;
