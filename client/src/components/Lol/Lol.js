import React, { Component } from 'react';

class Lol extends Component {
  constructor(){
    super();
    this.state = {
        displayName: "BrettMerri"
    }
  }

  componentDidMount() {
      this.getLolData(data => {
          alert(data + data.displayName + data.summonerId);
      });
  }

  getLolData(callback) {
    fetch(`http://localhost:3001/api/lol/displayname/${this.state.displayName}`)
    .then(res => res.json())
    .then(data => callback(data));
  }

  render() {
      return (
        <div></div>  
      );
  }
}

export default Lol;