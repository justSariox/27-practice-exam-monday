export type CounterState = {
    counter: number
    min: number
    max: number
}

export type IncrementActionType = {
    type: 'INCREMENT'
    delta: number
}

export type DecrementActionType = {
    type: 'DECREMENT'
    delta: number
}

export type SetMinimalCountActionType = {
    type: 'SET_MINIMAL'
    min: number
}

export type SetMaxCountActionType = {
    type: 'SET_MAX'
    max: number
}

export type ResetCounterActionType = {
    type: 'RESET_COUNTER',
    min: number
}

export type SetInitialCounterActionType = {
    type: 'SET_INITIAL',
    counter: number
}

export type ActionsType =
    IncrementActionType
    | DecrementActionType
    | SetMinimalCountActionType
    | SetMaxCountActionType
    | ResetCounterActionType
    | SetInitialCounterActionType

