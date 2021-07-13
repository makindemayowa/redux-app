import { combineReducers } from 'redux'
import fareReducer from './fareReducer'
import slotWidgetsReducer from './slotWidgetsReducer'

const rootReducer = combineReducers({widgets: slotWidgetsReducer, fares: fareReducer})

export default rootReducer
