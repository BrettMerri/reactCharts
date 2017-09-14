import { combineReducers } from 'redux';
import { chartData, chartHasErrored, chartIsLoading } from './chart';
import { lolData, lolHasErrored, lolIsLoading } from './lol';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    chartData,
    chartHasErrored,
    chartIsLoading,
    lolData,
    lolHasErrored,
    lolIsLoading,
    form: reduxFormReducer
});