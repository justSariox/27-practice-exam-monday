import React, {useEffect, useState} from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import './App.css';
import {CounterField} from "./Components/CounterField/CounterField";
import {Operations} from "./Components/Operations/Operations";
import {Settings} from "./Components/Settings/Settings";

const App = () => {

    const [minValueRange, setMinValueRange] = useState<number>(Number(localStorage.getItem('minValueRange')))
    const [maxValueRange, setMaxValueRange] = useState<number>(Number(localStorage.getItem('maxValueRange')))
    const [counter, setCounter] = useState<number>(minValueRange)

    useEffect(() => {
        localStorage.setItem('minValueRange', minValueRange.toString());
        localStorage.setItem('maxValueRange', maxValueRange.toString());
        if (maxValueRange === minValueRange) {
            setMaxValueRange(minValueRange + 1);
        }
        setCounter(minValueRange)
    }, [minValueRange, maxValueRange]);



    const incrementCounterHandler = () => {
        setCounter(prevState => prevState < maxValueRange && prevState >= minValueRange ? ++prevState : prevState)
    }

    const resetCounterHandler = () => {
        counter > minValueRange && setCounter(minValueRange)
    }

    return (
        <div className="App">
            <Routes>
                <Route path={'/*'} element={<Navigate to={'*/counter'}/>}/>
                {/*<Route path={'/'} element={<Navigate to={'/counter'}/>}/>*/}
                <Route path={'*/counter'} element={<CounterField
                    counter={counter}
                    max={maxValueRange}
                    min={minValueRange}
                />}
                />
                <Route path={'Settings'} element={
                    <Settings
                        min={minValueRange}
                        setMin={setMinValueRange}
                        max={maxValueRange}
                        setMax={setMaxValueRange}
                    />}
                />
            </Routes>
            <Operations
                counter={counter}
                increment={incrementCounterHandler}
                reset={resetCounterHandler}
                min={minValueRange}
                max={maxValueRange}
            />
        </div>
    );
}

export default App;
