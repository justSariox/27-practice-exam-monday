import {ActionsType, CounterState} from "../../types/counter";


let initialState: CounterState = {
    counter: 0,
    min: 0,
    max: 10
}

export const CounterReducer = (state = initialState, action: ActionsType): CounterState => {
    switch (action.type) {
        case 'SET_INITIAL': {
            return { ...state, counter: state.min }
        }
        case 'INCREMENT': {
            return {...state, counter: state.counter + action.delta}
        }
        case 'DECREMENT': {
            return {...state, counter: state.counter - action.delta}
        }
        case "SET_MINIMAL":
            return action.min >= 0 && action.min < state.max ? { ...state, min: action.min } : state;

        case "SET_MAX":
            return action.max > state.min ? { ...state, max: action.max } : state;

        case "RESET_COUNTER":
            return { ...state, counter: action.min }
        default:
            return state
    }
}

