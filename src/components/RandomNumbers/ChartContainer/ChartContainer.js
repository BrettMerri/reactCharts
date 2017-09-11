import React from 'react';
import ChartLoadingOverlay from './ChartLoadingOverlay/ChartLoadingOverlay';
import Chart from './Chart/Chart';

const ChartContainer = (props) => (
    <div className="chart-container">
        <Chart chartData={props.chartData} />
        <ChartLoadingOverlay chartLoading={props.chartLoading} />
    </div>  
)

export default ChartContainer;