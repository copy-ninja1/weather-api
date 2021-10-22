import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function SelectLocation() {
  const [currentLocation, setCurrentLocation] = React.useState("Abuja");
  const options = ["Abuja", "Lagos", "Califoni"];
  const handleLocationChange = (e) => {
    // console.log({ e });
    setCurrentLocation(e.value)
  };
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
