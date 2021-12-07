import { combineReducers } from "redux";
import { appComponentReducer } from "./appComponentReducer";
import { bmiFormReducer } from "./bmiFormReducer";
export const reducer=combineReducers({
    bmiFormReducer,
    appComponentReducer
    

})