import React, {useEffect, useState} from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import './App.css';
import {CounterField} from "./Components/CounterField/CounterField";
import {Operations} from "./Components/Operations/Operations";
import {Settings} from "./Components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    CounterReducer,
    CounterState,
    IncrementCountAC,
    ResetCounterAC, SetMaxCountAC,
    SetMinimalAC
} from "./redux/reducers/CounterReducer";
import {rootStateType} from "./redux/store/store";

const App = () => {

    const dispatch = useDispatch()
    const counter = useSelector<rootStateType, number>(state => state.CounterReducer.counter)
    const min = useSelector<rootStateType, number>(state => state.CounterReducer.min)
    const max = useSelector<rootStateType, number>(state => state.CounterReducer.max)


    const incrementCounterHandler = () => {

        const action = IncrementCountAC()
        dispatch(action)
    }

    const handleMinimalChange = (newMin: number) => {

        const action = SetMinimalAC(newMin)
        dispatch(action);
    }

    const handleMaxChange = (newMax: number) => {
        const action = SetMaxCountAC(newMax)
        dispatch(action)
    }

    const resetCounterHandler = () => {
        const action = ResetCounterAC(min)
        dispatch(action)
    }

    return (

        <div className="App">
            <Routes>
                <Route path={'/*'} element={<Navigate to={'/counter'}/>}/>
                <Route path={'/'} element={<Navigate to={'/counter'}/>}/>
                <Route path={'/counter'} element={<CounterField
                    counter={counter}
                    max={max}
                    min={min}
                />}
                />
                <Route path={'/settings'} element={
                    <Settings

                        min={min}
                        setMin={handleMinimalChange}
                        max={max}
                        setMax={handleMaxChange}
                    />}
                />
            </Routes>
            <Operations
                counter={counter}
                increment={incrementCounterHandler}
                reset={resetCounterHandler}
                min={min}
                max={max}
            />
        </div>
    );
}

export default App;
