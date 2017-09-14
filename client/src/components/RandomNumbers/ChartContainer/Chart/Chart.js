import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Chart.css';

const Chart = (props) => (
    <Bar
        data={{
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            datasets: [{
                label: 'Values',
                data: props.chartData,
                //backgroundColor: props.barColors,
                borderWidth:1,
                borderColor:'#777',
                //hoverBackgroundColor: props.hoverBarColors,
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