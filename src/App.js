import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import RefreshDataButton from './components/RefreshDataButton';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      buttonDisabled: true
    };
  }

  componentWillMount() {
    this.getRandomNumbersData((numbers) => {
      this.setChartData(numbers);
    });
  }

  handleRefreshDataClick() {
    this.setState({buttonDisabled: true});
    this.getRandomNumbersData((numbers) => {
      this.setChartData(numbers);
    });
  }

  getRandomNumbersData(callback) {
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
      .then((res) => res.json())
      .then((data) => {
        callback(data.data); //Data.data is where the array of numbers are stored in the JSON object
      })
  }

  setChartData(numbers){
    var xAxisLabels = [];
    var barColors = [];
    var hoverBarColors = [];

    for (let i = 0; i < numbers.length; i++) {
      xAxisLabels.push(i + 1); // Pushes labels counting up from 1 to the length of the data

      switch (i % 7) { // Pushes ROYGBIV colors to barColors
        case 0:
          barColors.push('rgba(209, 0, 0, 0.6'); // Red
          hoverBarColors.push('rgba(209, 0, 0, 1');
          break;
        case 1:
          barColors.push('rgba(255, 102, 34, 0.6'); // Orange
          hoverBarColors.push('rgba(255, 102, 34, 1');
          break;
        case 2:
          barColors.push('rgba(255, 218, 33, 0.6'); // Yellow
          hoverBarColors.push('rgba(255, 218, 33, 1');
          break;
        case 3:
          barColors.push('rgba(51, 221, 0, 0.6'); // Green
          hoverBarColors.push('rgba(51, 221, 0, 1');
          break;
        case 4:
          barColors.push('rgba(17, 51, 204, 0.6'); // Blue
          hoverBarColors.push('rgba(17, 51, 204, 1');
          break;
        case 5:
          barColors.push('rgba(34, 0, 102, 0.6'); // Indigo
          hoverBarColors.push('rgba(34, 0, 102, 1');
          break;
        case 6:
          barColors.push('rgba(51, 0, 68, 0.6'); // Violet
          hoverBarColors.push('rgba(51, 0, 68, 1');
          break;
      }
    }

    this.setState({
      chartData: {
        labels: xAxisLabels,
        datasets: [{
            label: 'Values',
            data: numbers,
            backgroundColor: barColors,
            borderWidth:1,
            borderColor:'#777',
            hoverBackgroundColor: hoverBarColors,
            hoverBorderWidth:2,
            hoverBorderColor:'#000'
        }]
      },
      buttonDisabled: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart chartData={this.state.chartData} />
        <RefreshDataButton
          handleClick={this.handleRefreshDataClick.bind(this)}
          buttonDisabled={this.state.buttonDisabled}/>
      </div>
    );
  }
}

export default App;
