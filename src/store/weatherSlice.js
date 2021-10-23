import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../utils";

const namespace = "weather";

const initialState = {
  weatherData: {},
  chartData: [],
  currentLocation: "London",
  temperatureType: "temp_c",
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
const getWeatherDataToPlot = (temperatureType, weatherHourData) => {
  let data = [];
  weatherHourData.forEach((weather) => {
    data.push([weather.time, weather[temperatureType], weather.humidity]);
  });

  data.unshift(["Time", "Temperature", "humidity"]);
  return data;
};

const weatherSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setCurrentLocation(state, action) {
      state.currentLocation = action.payload;
    },
    setTemperatureType(state, action) {
      state.temperatureType = action.payload;
      state.chartData = getWeatherDataToPlot(
        action.payload,
        state.weatherData?.forecast?.forecastday[0]?.hour
      );
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

        //get weather hour data from payload
        state.chartData = getWeatherDataToPlot(
          state.temperatureType,
          action.payload?.forecast?.forecastday[0]?.hour
        );
      });
  },
});

export const { setCurrentLocation, setTemperatureType } = weatherSlice.actions;

export default weatherSlice.reducer;
