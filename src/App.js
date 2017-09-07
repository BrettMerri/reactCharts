import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    };

  }

  componentWillMount(){
    this.getData((numbers) => {
      console.log(numbers);
      this.getChartData(numbers);
    });
  }

  getData(callback) {
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
      .then((res) => res.json())
      .then((data) => {
        callback(data.data);
      })
  }

  getChartData(numbers){
    this.setState({
      chartData: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
        datasets: [{
            label: 'Values',
            data: numbers,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
