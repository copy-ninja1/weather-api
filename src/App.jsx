import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setTemperatureType } from "./store/weatherSlice";
import { CurrentDay, LocationHeader, WeatherChart } from "./components";
const Page = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const MesureType = {
  Box: styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  `,
  Button: styled.button`
    cursor: pointer;
    outline: none;
    border: 1px solid #ededed;
    background-color: ${(props) => (props.tempType ? "blue" : "#f7f7f7")};
    color: ${(props) => (props.tempType ? "white" : "black")};
    border-radius: 4px;
    padding: 4px;
    font-size: 18px;
  `,
};
function App() {
  const dispatch= useDispatch()
  const { weatherData ,temperatureType} = useSelector((state) => state.weather);
  const handletempChange = (temp) => {
    dispatch(setTemperatureType(temp));
  };

  return (
    <Page>
      <div>
        <LocationHeader></LocationHeader>
        <CurrentDay weatherData={weatherData} tempType={temperatureType} />
        <WeatherChart />
      </div>
      
      <MesureType.Box>
        <MesureType.Button
          tempType={temperatureType === "temp_f"}
          onClick={() => handletempChange("temp_f")}
        >
          &#176;F
        </MesureType.Button>{" "}
        |{" "}
        <MesureType.Button
          tempType={temperatureType === "temp_c"}
          onClick={() => handletempChange("temp_c")}
        >
          &#176;C
        </MesureType.Button>{" "}
      </MesureType.Box>
    </Page>
  );
}

export default App;
//
