import { combineReducers } from 'redux'
import * as actionTypes from "./actionTypes"

const slotWidgetInitialState: WidgetsState = {
    slotWidgets: [],
};

const fareInitialState: FareState = {};

const slotWidgetsReducer = (
    state: WidgetsState = slotWidgetInitialState,
    action: WidgetAction
  ): WidgetsState => {
    switch (action.type) {
      case actionTypes.LOAD_WIDGETS:
        return {
          ...state,
          slotWidgets: action.slotWidgets,
        }
    }
    return state
};

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

const rootReducer = combineReducers({widgets: slotWidgetsReducer, fares: fareReducer})

export default rootReducer
