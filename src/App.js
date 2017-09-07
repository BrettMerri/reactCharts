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
