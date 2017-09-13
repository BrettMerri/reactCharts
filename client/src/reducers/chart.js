export function chartHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
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

export function numbers(state = [], action) {
    switch (action.type) {
        case 'CHART_FETCH_NUMBERS_SUCCESS':
            return action.numbers;

        default:
            return state;
    }
}