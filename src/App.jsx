import React from "react";
import { DayWeather, CurrentDay, LocationHeader } from "./components";
import styled from "styled-components";
const Page = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
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
    border:1px solid #ededed;
    background-color:#f7f7f7;
    border-radius:4px;
    padding:4px;
    font-size:18px;
  `,
};
function App() {
  return (
    <Page>
      <div>
        <LocationHeader></LocationHeader>
        <h1>Home</h1>
        <div>
          <Flex>
            <DayWeather name="Mon" />
            <DayWeather name="Mon" />
            <DayWeather name="Mon" />
          </Flex>
        </div>
      </div>
      <MesureType.Box>
        <MesureType.Button>&#176;F</MesureType.Button> |{" "}
        <MesureType.Button>&#176;C</MesureType.Button>{" "}
      </MesureType.Box>
    </Page>
  );
}

export default App;
