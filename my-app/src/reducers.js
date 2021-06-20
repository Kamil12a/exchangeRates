import { combineReducers } from "redux";
import exchangeReducer from "./exchangers/duck";
import favouriteReducer from "./favourite/duck";

const rootReducer = combineReducers({
    exchanges:exchangeReducer,
    favourite:favouriteReducer
})
export  default rootReducer