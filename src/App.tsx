import React from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import './App.css';
import {CounterField} from "./Components/CounterField/CounterField";
import {Operations} from "./Components/Operations/Operations";
import {Settings} from "./Components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import { CounterSelectors} from "./redux/selectors/CounterSelectors";
import {
    IncrementCountAC,
    ResetCounterAC,
    SetInitalCounterAC,
    SetMaxCountAC,
    SetMinimalAC
} from "./redux/actions/CounterActions";

const App = () => {

    const dispatch = useDispatch()
    const counter = useSelector(CounterSelectors.counter);
    const min = useSelector(CounterSelectors.min);
    const max = useSelector(CounterSelectors.max);

    const setInitial = () => {
        const action = SetInitalCounterAC(min)
        dispatch(action)
    }

    const incrementCounterHandler = () => {
        const action = IncrementCountAC(1)
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
                setInitial={setInitial}
                min={min}
                max={max}
            />
        </div>
    );
}

export default App;
