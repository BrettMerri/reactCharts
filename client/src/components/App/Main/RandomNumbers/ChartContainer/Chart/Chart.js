import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Chart.css';

const Chart = (props) => (
    <Bar
        data={{
            labels: props.chartData.xAxisLabels,
            datasets: [{
                data: props.chartData.numbers,
                backgroundColor: props.chartData.barColors,
                hoverBackgroundColor: props.chartData.hoverBarColors,
                label: 'Values',
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:2,
                hoverBorderColor:'#000'
            }]
        }}
        options={{
            title: {
                display:true,
                text:'Random Numbers 0-255',
                fontSize:20
            },
            legend: {
                display:false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 300
                    }
                }]
            }
        }}
    />
)

export default Chart;