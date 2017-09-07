import React, {Component} from 'react';

class RefreshDataButton extends Component{
    render(){
        return(
            <button className="btn btn-default" onClick={this.props.handleClick} disabled={this.props.buttonDisabled}>Refresh</button>
        )
    }
}

export default RefreshDataButton;