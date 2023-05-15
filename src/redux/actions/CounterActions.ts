import {
    DecrementActionType,
    IncrementActionType,
    ResetCounterActionType, SetInitialCounterActionType, SetMaxCountActionType,
    SetMinimalCountActionType
} from "../../types/counter";

export const SetInitalCounterAC = (counter: number): SetInitialCounterActionType => ({ type: 'SET_INITIAL', counter })
export const IncrementCountAC = (delta: number): IncrementActionType => ({ type: "INCREMENT", delta });
export const DecrementCountAC = (delta: number): DecrementActionType => ({ type: "DECREMENT", delta })
export const SetMinimalAC = (min: number): SetMinimalCountActionType => ({ type: "SET_MINIMAL", min })
export const SetMaxCountAC = (max: number): SetMaxCountActionType => ({ type: "SET_MAX", max })
export const ResetCounterAC = (min: number): ResetCounterActionType => ({ type: "RESET_COUNTER", min: min })