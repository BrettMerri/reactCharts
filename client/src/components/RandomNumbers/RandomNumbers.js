import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import { fetchChartData } from '../../actions/chart'
import ChartContainer from './ChartContainer/ChartContainer'
import RefreshDataButton from './RefreshDataButton/RefreshDataButton';

class RandomNumbers extends Component {
/*
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
*/

  componentDidMount() {
    this.props.fetchData();
  }

  handleRefreshDataClick() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="RandomNumbers">
        <ChartContainer
          chartData={this.props.numbers}
          chartLoading={this.props.isLoading}
        />
        <RefreshDataButton
          handleClick={this.handleRefreshDataClick.bind(this)}
          chartLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      numbers: state.numbers,
      hasErrored: state.chartHasErrored,
      isLoading: state.chartIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchChartData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomNumbers);