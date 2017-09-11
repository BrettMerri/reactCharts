import React, {Component} from 'react';

const RefreshDataButton = (props) => {
    return(
        <button className="btn btn-default"
            onClick={props.handleClick}
            disabled={props.chartLoading}>
            Refresh
        </button>
    )
}

export default RefreshDataButton;