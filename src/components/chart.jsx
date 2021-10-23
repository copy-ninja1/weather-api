import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

function WeatherChart () {   
  const { chartData } = useSelector((state) => state.weather);
 
   return(<div> <Chart
    width={'100vh'}
    height={'500px'}
    chartType="Bar"
    loader={<div>Loading Chart</div>}
    data={chartData}
    options={{
      // Material design options
      chart: {
        title: 'Weather Performance',
        subtitle: 'Temperature, humidity, 2021',
      },
    }}
    // For tests
    rootProps={{ 'data-testid': '2' }}
  /></div>)
}

export default WeatherChart;