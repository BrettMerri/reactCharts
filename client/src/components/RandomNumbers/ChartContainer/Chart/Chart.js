import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Chart.css';

const Chart = (props) => (
    <Bar
        data={props.chartData}
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