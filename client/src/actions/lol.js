export function lolHasErrored(bool) {
    return {
        type: 'LOL_HAS_ERRORED',
        hasErrored: bool
    }
}

export function lolIsLoading(bool) {
    return {
        type: 'LOL_IS_LOADING',
        isLoading: bool
    }
}

export function lolFetchLolDataSuccess(lolData) {
    return {
        type: 'LOL_FETCH_LOL_DATA_SUCCESS',
        lolData
    }
}

export function errorAfterEightSeconds() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(lolHasErrored(true));
        }, 8000);
    }
}

export function fetchLolData(displayName) {
    return (dispatch) => {
        dispatch(lolIsLoading(true));

        fetch(`http://localhost:3001/api/lol/displayname/${displayName}`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(lolIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(lolData => dispatch(lolFetchLolDataSuccess(lolData)))
            .catch(() => dispatch(lolHasErrored(true)));
    }
}