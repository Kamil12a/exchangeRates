import { combineReducers } from "redux";
import exchangeReducer from "./exchangers/duck";

const rootReducer = combineReducers({
    exchanges:exchangeReducer
})
export  default rootReducer