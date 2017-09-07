import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props)
        this.state = {
            chartData: props.chartData
        }
    }
    render(){
        return(
            <div className="chart-container">
                <Bar
                    data={this.props.chartData}
                    options={{
                        title: {
                            display:true,
                            text:'Data Chart',
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
            </div>
        )
    }
}

export default Chart;