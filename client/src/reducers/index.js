import { combineReducers } from 'redux';
import { numbers, chartHasErrored, chartIsLoading } from './chart';

export default combineReducers({
    numbers,
    chartHasErrored,
    chartIsLoading
});