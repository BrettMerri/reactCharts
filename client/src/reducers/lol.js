export function lolHasErrored(state = false, action) {
    switch (action.type) {
        case 'LOL_HAS_ERRORED':
            return action.hasErrored;
        
        default:
            return state;
    }
}

export function lolIsLoading(state = false, action) {
    switch (action.type) {
        case 'LOL_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function lolData(state = {}, action) {
    switch (action.type) {
        case 'LOL_FETCH_LOL_DATA_SUCCESS':
            return action.lolData;

        default:
            return state;
    }
}