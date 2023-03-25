import React, {useState} from 'react';
import './App.css';
import {CounterField} from "./Components/CounterField/CounterField";
import {Operations} from "./Components/Operations/Operations";

const App = () => {

    const [counter, setCounter] = useState<number>(0)

    const incrementCounterHandler = () => {
        setCounter(prevState => prevState < 5 ? ++prevState : prevState)
    }

    const resetCounterHandler = () => {
        counter > 0 && setCounter(0)
    }


    return (
        <div className="App">
            <CounterField counter={counter}/>
            <Operations counter={counter} increment={incrementCounterHandler} reset={resetCounterHandler}/>
        </div>
    );
}

export default App;
