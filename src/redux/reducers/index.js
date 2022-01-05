import { combineReducers } from "redux";

// register reducers
import { ReducerAuth } from "./ReducerAuth";
import { ReducerBalance, ReducerTransaction } from "./ReducerTransaction";


// register reducers
const reducers = combineReducers({
    ReducerAuth,
    ReducerBalance,
    ReducerTransaction
})

export default reducers;