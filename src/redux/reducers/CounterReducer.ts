export type CounterState = {
    counter: number
    min: number
    max: number
}


type IncrementActionType = {
    type: 'INCREMENT'
    counter: number
}

type DecrementActionType = {
    type: 'DECREMENT'
    counter: number
}

type SetMinimalCountActionType = {
    type: 'SET_MINIMAL'
    minimal: number

}

type SetMaxCountActionType = {
    type: 'SET_MAX'
    max: number
}

type ResetCounterActionType = {
    type: 'RESET_COUNTER',
    min: number
}
type ActionsType =
    IncrementActionType
    | DecrementActionType
    | SetMinimalCountActionType
    | SetMaxCountActionType
    | ResetCounterActionType

let initialState: CounterState = {
    counter: 0,
    min: 0,
    max: 10
}

export const CounterReducer = (state = initialState, action: ActionsType): CounterState => {
    switch (action.type) {
        case 'INCREMENT': {
            return action.counter >= state.min && action.counter < state.max
                ? {...state, counter: state.counter + action.counter}
                : {...state}
        }
        case 'DECREMENT': {
            return action.counter > state.min && action.counter < state.max
                ? {...state, counter: state.counter - action.counter}
                : {...state}
        }
        case "SET_MINIMAL":
            return action.minimal <= 0 ? {...state, min: action.minimal} : {...state}
        case "SET_MAX":
            return {...state, max: action.max}
        case "RESET_COUNTER":
            return {...state, counter: action.min}
        default: return state
    }
}

export const IncrementCountAC = (): IncrementActionType => ({type: "INCREMENT", counter: 1})
export const DecrementCountAC = (): DecrementActionType => ({type: "DECREMENT", counter: 1})
export const SetMinimalAC = ( min: number): SetMinimalCountActionType => ({type: "SET_MINIMAL", minimal: min})
export const SetMaxCountAC = ( max: number): SetMaxCountActionType => ({type: "SET_MAX", max})
export const ResetCounterAC = (min: number): ResetCounterActionType => ({type: "RESET_COUNTER", min: min})