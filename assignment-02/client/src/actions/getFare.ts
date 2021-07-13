import * as actionTypes from "./actionTypes"

function getFare(fareId: string) {
    return (dispatch: DispatchType) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/fares/${fareId}`)
            .then(response => response.json())
            .then(data => dispatch({
                type: actionTypes.LOAD_FARE_INFORMATION,
                fare: data.fare,
                fareId
            }));
    };
};

export default getFare;
