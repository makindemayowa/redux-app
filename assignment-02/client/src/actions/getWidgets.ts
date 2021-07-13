import * as actionTypes from "./actionTypes"

function getWidgets() {
  return (dispatch: DispatchType) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/slot-widgets`)
        .then(response => response.json())
        .then(data => dispatch({
            type: actionTypes.LOAD_WIDGETS,
            slotWidgets: data['slot-widgets']
        }));
    };
}

export default getWidgets;
