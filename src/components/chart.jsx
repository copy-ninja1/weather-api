import React from "react";
import { Chart } from "react-google-charts";

function WeatherChart ({data}) {    
   return(<div> <Chart
    width={'100vh'}
    height={'500px'}
    chartType="Bar"
    loader={<div>Loading Chart</div>}
    data={data}
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