import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../utils";

const namespace = "weather";

const initialState = {
  weatherData: {},
  currentLocation: "London",
};

export const fetchWeather = createAsyncThunk(
  `${namespace}/current`,
  async (region) => {
    const { data } = await Api.get("/v1/forecast.json", {
      params: {
        key: process.env.REACT_APP_APIKEY,
        q: region,
        aqi: "no",
      },
    });
    return data;
  }
);

const weatherSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setCurrentLocation(state, action) {
      state.currentLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchWeather.pending, (state, action) => {

      // })
      .addCase(fetchWeather.rejected, (state, { error }) => {
        console.error(error);
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
      });
  },
});

export const { setCurrentLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
