export function chartHasErrored(bool) {
    return {
        type: 'CHART_HAS_ERRORED',
        hasErrored: bool
    }
}

export function chartIsLoading(bool) {
    return {
        type: 'CHART_IS_LOADING',
        isLoading: bool
    }
}

export function chartFetchNumbersSuccess(numbers) {
    return {
        type: 'CHART_FETCH_NUMBERS_SUCCESS',
        numbers
    }
}

export function errorAfterEightSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(chartHasErrored(true));
        }, 8000);
    };
}

export function fetchChartData() {
    return (dispatch) => {
        dispatch(chartIsLoading(true));

        fetch('http://localhost:3001/api/randomnumbers/count/15')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(chartIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(numbers => dispatch(chartFetchNumbersSuccess(numbers)))
            .catch(() => dispatch(chartHasErrored(true)));
    };
}