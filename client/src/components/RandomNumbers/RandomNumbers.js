import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import { fetchChartData } from '../../actions/chart'
import ChartContainer from './ChartContainer/ChartContainer'
import RefreshDataButton from './RefreshDataButton/RefreshDataButton';

class RandomNumbers extends Component {
/*
  componentDidMount() {
    this.updateChartData();
  }

  updateChartData() {
    this.getRandomNumbersData(numbers => {
      this.setChartData(numbers);
    });
  }

  handleRefreshDataClick() {
    this.setState({chartLoading: true});
    this.updateChartData();
  }

  getRandomNumbersData(callback) {
    fetch('/api/randomnumbers/count/15')
      .then(res => res.json())
      .then(data => callback(data));
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
      <div className="RandomNumbers">
        <ChartContainer
          chartData={this.state.chartData}
          chartLoading={this.state.chartLoading}
        />
        <RefreshDataButton
          handleClick={this.handleRefreshDataClick.bind(this)}
          chartLoading={this.state.chartLoading}
        />
      </div>
    );
  }

*/

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    return (
        <ul>
            {alert(this.props.numbers)}
        </ul>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      numbers: state.chartData,
      hasErrored: state.itemsHasErrored,
      isLoading: state.chartIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchChartData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomNumbers);