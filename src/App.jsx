import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CurrentDay, LocationHeader } from "./components";

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
  const [tempType, setTempType] = React.useState("c");

  const handletempChange = (temp) => {
    setTempType(temp);
  };
  return (
    <Page>
      <div>
        <LocationHeader></LocationHeader>
        <CurrentDay weatherData={weatherData?.current} tempType={tempType} />
      </div>
      <MesureType.Box>
        <MesureType.Button
          tempType={tempType === "f"}
          onClick={() => handletempChange("f")}
        >
          &#176;F
        </MesureType.Button>{" "}
        |{" "}
        <MesureType.Button
          tempType={tempType === "c"}
          onClick={() => handletempChange("c")}
        >
          &#176;C
        </MesureType.Button>{" "}
      </MesureType.Box>
    </Page>
  );
}

export default App;
//
