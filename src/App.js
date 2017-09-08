import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart/Chart';
import RefreshDataButton from './components/RefreshDataButton/RefreshDataButton';
import ChartLoadingOverlay from './components/ChartLoadingOverlay/ChartLoadingOverlay';
import keys from './keys/keys';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      chartLoading: true
    };
  }

  componentWillMount() {
    this.updateChartData();
  }

  updateChartData() {
    this.getRandomNumbersData((numbers) => {
      this.setChartData(numbers);
    });
  }

  handleRefreshDataClick() {
    this.setState({chartLoading: true});
    this.updateChartData();
  }

  getLolData(callback) {
    fetch(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=${keys.lol}`)
      .then((res) => res.json())
      .then((data) => callback(data.data));
  }

  getRandomNumbersData(callback) {
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8')
      .then((res) => res.json())
      .then((data) => callback(data.data)); // Data.data is where the array of numbers are stored in the JSON object
  }

  setChartData(numbers){
    let xAxisLabels = [];
    let barColors = [];
    let hoverBarColors = [];

    for (let i = 0; i < numbers.length; i++) {
      xAxisLabels.push(i + 1); // Pushes labels counting up from 1 to the length of the data

      switch (i % 7) { // Pushes ROYGBIV colors to barColors and hoverBarColors
        case 0:
          barColors.push('rgba(209, 0, 0, 0.6'); // Red
          hoverBarColors.push('rgba(209, 0, 0, 0.8');
          break;
        case 1:
          barColors.push('rgba(255, 102, 34, 0.6'); // Orange
          hoverBarColors.push('rgba(255, 102, 34, 0.8');
          break;
        case 2:
          barColors.push('rgba(255, 218, 33, 0.6'); // Yellow
          hoverBarColors.push('rgba(255, 218, 33, 0.8');
          break;
        case 3:
          barColors.push('rgba(51, 221, 0, 0.6'); // Green
          hoverBarColors.push('rgba(51, 221, 0, 0.8');
          break;
        case 4:
          barColors.push('rgba(17, 51, 204, 0.6'); // Blue
          hoverBarColors.push('rgba(17, 51, 204, 0.8');
          break;
        case 5:
          barColors.push('rgba(34, 0, 102, 0.6'); // Indigo
          hoverBarColors.push('rgba(34, 0, 102, 0.8');
          break;
        case 6:
          barColors.push('rgba(51, 0, 68, 0.6'); // Violet
          hoverBarColors.push('rgba(51, 0, 68, 0.8');
          break;
        default:
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
      chartLoading: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="chart-container">
          <Chart chartData={this.state.chartData} />
          <ChartLoadingOverlay chartLoading={this.state.chartLoading} />
        </div>
        <RefreshDataButton
          handleClick={this.handleRefreshDataClick.bind(this)}
          chartLoading={this.state.chartLoading}
        />
      </div>
    );
  }
}

export default App;
