import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
    constructor(props){
        super(props)
        this.state = {
            chartData: props.chartData
        }
    }
    render(){
        return(
            <Bar
                data={this.props.chartData}
                options={{
                    title: {
                        display:true,
                        text:'Random Numbers',
                        fontSize:20
                    },
                    legend: {
                        display:false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        )
    }
}

export default Chart;