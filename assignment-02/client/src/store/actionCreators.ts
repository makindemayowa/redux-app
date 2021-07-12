import * as actionTypes from "./actionTypes"

export function getWidgets() {
  return (dispatch: DispatchType) => {
    fetch('http://localhost:9001/slot-widgets')
        .then(response => response.json())
        .then(data => dispatch({
            type: actionTypes.LOAD_WIDGETS,
            slotWidgets: data['slot-widgets']
        }));
    };
}

export function getFare(fareId: string) {
    return (dispatch: DispatchType) => {
        fetch(`http://localhost:9001/fares/${fareId}`)
            .then(response => response.json())
            .then(data => dispatch({
                type: actionTypes.LOAD_FARE_INFORMATION,
                fare: data.fare,
                fareId
            }));
    };
};
