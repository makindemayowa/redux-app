import * as actionTypes from "../actions/actionTypes"

const fareInitialState: FareState = {};

const fareReducer = (
    state: FareState = fareInitialState,
    action: FareAction
  ): FareState => {
    switch (action.type) {
      case actionTypes.LOAD_FARE_INFORMATION:
        return {
          ...state,
          [action.fareId]: action.fare,
        }
    };
    return state
};

export default fareReducer
