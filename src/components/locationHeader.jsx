import React from "react";
import { Header } from "./locationHeader.style";
function LocationHeader() {
  return (
    <Header.Container>
      <Header.Text>Right Now in</Header.Text>
      <Header.LocationInput>
        <input type="text" />
      </Header.LocationInput>
    </Header.Container>
  );
}
export default LocationHeader;
