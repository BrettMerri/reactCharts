import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLolData } from '../../../../actions/lol';
import LolForm from './LolForm/LolForm';
import './Lol.css';

class Lol extends Component {
  submit = (values) => {
      this.props.fetchData(values.displayName);
  }

  render() {
    let output;

    if(this.props.lolIsLoading) {
      output = "Loading...";
    } else if(Object.keys(this.props.lolData).length === 0) {
      output = "";
    } else {
      output = JSON.stringify(this.props.lolData);
    }
    return (
      <div>
        <LolForm onSubmit={this.submit} />
        <p>{output}</p>
        {/*
        <table className="table lolTable">
          <thead className="thead-default">
            <tr>
              <th>#</th>
              <th>Display Name</th>
              <th>Summoner ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        */}
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