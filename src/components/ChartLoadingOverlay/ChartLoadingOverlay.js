import React, {Component} from 'react';
import './ChartLoadingOverlay.css';

class ChartLoadingOverlay extends Component{
    render(){
        if (!this.props.chartLoading) {
            return null;
        }
        return(
            <div>
                <div id="overlay"></div>
                <div id="loading-img-container">
                    <img src="http://i59.tinypic.com/mm6691.gif" id="loading-img" />
                </div>
            </div>
        )
    }
}

export default ChartLoadingOverlay;