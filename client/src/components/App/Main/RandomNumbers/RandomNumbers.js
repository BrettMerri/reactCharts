import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChartData } from '../../../../actions/chart'
import ChartContainer from './ChartContainer/ChartContainer'
import RefreshDataButton from './RefreshDataButton/RefreshDataButton';

class RandomNumbers extends Component {

  componentDidMount() {
    if (Object.keys(this.props.chartData).length === 0) // If chartData object is empty
      this.props.fetchData();
  }

  handleRefreshDataClick() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="RandomNumbers">
        <ChartContainer
          chartData={this.props.chartData}
          chartLoading={this.props.isLoading}
        />
        <RefreshDataButton
          handleClick={this.handleRefreshDataClick.bind(this)}
          chartLoading={this.props.isLoading}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      chartData: state.chartData,
      hasErrored: state.chartHasErrored,
      isLoading: state.chartIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchChartData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomNumbers);