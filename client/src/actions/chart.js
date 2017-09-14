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

export function chartFetchChartDataSuccess(chartData) {
    return {
        type: 'CHART_FETCH_CHART_DATA_SUCCESS',
        chartData
    }
}

export function errorAfterEightSeconds() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(chartHasErrored(true));
        }, 8000);
    }
}

export function fetchChartData() {
    return (dispatch) => {
        dispatch(chartIsLoading(true));

        fetch('http://localhost:3001/api/randomnumbers/count/15')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(chartIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(numbers => {
                getChartColorData(numbers, chartData => {
                    dispatch(chartFetchChartDataSuccess(chartData));
                });
            })
            .catch(() => dispatch(chartHasErrored(true)));
    };
}

function getChartColorData(numbers, callback) {
    let xAxisLabels = [];
    let barColors = [];
    let hoverBarColors = [];

    for (let i = 0; i < numbers.length; i++) {
      xAxisLabels.push(i + 1); // Pushes labels counting up from 1 to the length of the data

      switch (i % 7) { // Pushes ROYGBIV colors to barColors and hoverBarColors
        case 0:
          barColors.push('rgba(209, 0, 0, 0.6'); // Red
          hoverBarColors.push('rgba(209, 0, 0, 0.8');
          break;
        case 1:
          barColors.push('rgba(255, 102, 34, 0.6'); // Orange
          hoverBarColors.push('rgba(255, 102, 34, 0.8');
          break;
        case 2:
          barColors.push('rgba(255, 218, 33, 0.6'); // Yellow
          hoverBarColors.push('rgba(255, 218, 33, 0.8');
          break;
        case 3:
          barColors.push('rgba(51, 221, 0, 0.6'); // Green
          hoverBarColors.push('rgba(51, 221, 0, 0.8');
          break;
        case 4:
          barColors.push('rgba(17, 51, 204, 0.6'); // Blue
          hoverBarColors.push('rgba(17, 51, 204, 0.8');
          break;
        case 5:
          barColors.push('rgba(34, 0, 102, 0.6'); // Indigo
          hoverBarColors.push('rgba(34, 0, 102, 0.8');
          break;
        case 6:
          barColors.push('rgba(51, 0, 68, 0.6'); // Violet
          hoverBarColors.push('rgba(51, 0, 68, 0.8');
          break;
        default:
      }
    }

    let chartData = {
        numbers,
        xAxisLabels,
        barColors,
        hoverBarColors
    }

    callback(chartData);
}
