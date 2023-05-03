import {combineReducers, legacy_createStore as createStore} from "redux";
import {CounterReducer} from "../reducers/CounterReducer";

const rootReducers = combineReducers({
    CounterReducer
})

const store = createStore(rootReducers)

export type rootStateType = ReturnType<typeof rootReducers>

export default store

// @ts-ignore
window.store = store