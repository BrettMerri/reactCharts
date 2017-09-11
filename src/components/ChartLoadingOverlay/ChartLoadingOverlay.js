import React, {Component} from 'react';
import './ChartLoadingOverlay.css';

const ChartLoadingOverlay = (props) => {
    if (!props.chartLoading) {
        return null;
    }
    return(
        <div>
            <div id="overlay"></div>
            <div id="loading-img-container">
                <img src="http://i59.tinypic.com/mm6691.gif" id="loading-img" alt="" />
            </div>
        </div>
    )
}

export default ChartLoadingOverlay;