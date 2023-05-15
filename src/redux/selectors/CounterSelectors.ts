import {rootStateType} from "../store/store";

export const CounterSelectors = {
    counter: (state: rootStateType) => state.CounterReducer.counter,
    min: (state: rootStateType) => state.CounterReducer.min,
    max: (state: rootStateType) => state.CounterReducer.max
};