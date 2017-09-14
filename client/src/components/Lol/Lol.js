import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLolData } from '../../actions/lol';
import LolForm from './LolForm/LolForm';

class Lol extends Component {
  submit = (values) => {
    this.props.fetchData(values.displayName);
  }

  render() {
    let output;

    if(this.props.lolIsLoading) {
      output = "Loading...";
    }
    else if(Object.keys(this.props.lolData).length === 0) {
      output = "";
    }
    else {
      output = JSON.stringify(this.props.lolData);
    }

    return (
      <div>
        <LolForm onSubmit={this.submit} />
        <p>{output}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lolData: state.lolData,
    lolIsLoading: state.lolIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (displayName) => dispatch(fetchLolData(displayName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lol);