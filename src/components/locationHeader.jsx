import React from "react";
import SelectLocation from "./SelectLocation"
import { Header } from "./locationHeader.style";

function LocationHeader() {
  return (
    <Header.Container>
      <Header.Text>The Weather Condition In</Header.Text> &nbsp;&nbsp;
       <SelectLocation/>     &nbsp;&nbsp; <Header.Text>At The Moment</Header.Text>

    </Header.Container>
  );
}
export default LocationHeader;
