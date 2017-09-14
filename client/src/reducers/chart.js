export function chartHasErrored(state = false, action) {
    switch (action.type) {
        case 'CHART_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function chartIsLoading(state = false, action) {
    switch (action.type) {
        case 'CHART_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function chartData(state = {}, action) {
    switch (action.type) {
        case 'CHART_FETCH_CHART_DATA_SUCCESS':
            return action.chartData;

        default:
            return state;
    }
}