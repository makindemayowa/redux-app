import * as actionTypes from "../actions/actionTypes"

const slotWidgetInitialState: WidgetsState = {
    slotWidgets: [],
};

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

export default slotWidgetsReducer
