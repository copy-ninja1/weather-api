import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
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
  const { weatherData } = useSelector((state) => state.weather);
  const [tempType, setTempType] = React.useState("temp_c");
  const [chartData, setChartData] = React.useState([]);
  const handletempChange = (temp) => {
    setTempType(temp);
  };
  const getWeatherDataToPlot = () => {
    let data = [];
    weatherData?.forecast?.forecastday[0]?.hour.forEach((weather) => {
      data.push([weather.time, weather[tempType], weather.humidity]);
    });
    console.log(data)
    data.unshift(['Time', 'Temperature', 'humidity'])
    setChartData(data)
  };
  React.useEffect(() => {
    getWeatherDataToPlot();
  }, [weatherData, tempType]);
  //   [
  //     // temperature in centigrade
  //   ['Time', 'Temperature', 'humidity', 'Profit'],
  //   ['2014', 1000, 400, 200],
  //   ['2015', 1170, 460, 250],
  //   ['2016', 660, 1120, 300],
  //   ['2017', 1030, 540, 350],
  // ]
  return (
    <Page>
      <div>
        <LocationHeader></LocationHeader>
        <CurrentDay weatherData={weatherData} tempType={tempType} />
        <WeatherChart data={chartData} />
      </div>
      <MesureType.Box>
        <MesureType.Button
          tempType={tempType === "temp_f"}
          onClick={() => handletempChange("temp_f")}
        >
          &#176;F
        </MesureType.Button>{" "}
        |{" "}
        <MesureType.Button
          tempType={tempType === "temp_c"}
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
