import React from 'react';
import './RefreshDataButton.css';

const RefreshDataButton = (props) => (
    <button className="btn btn-primary refresh-data-button"
        onClick={props.handleClick}
        disabled={props.chartLoading}>
        Refresh
    </button>
)

export default RefreshDataButton;