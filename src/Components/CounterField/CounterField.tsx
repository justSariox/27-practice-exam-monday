import s from './CounterField.module.css'
import {FC} from "react";

type CounterFieldPropsType = {
    counter: number
    max: number
    min: number
}

export const CounterField: FC<CounterFieldPropsType> = ({counter, max, min}) => {

    const counterClasses = counter === max ? s.counterMax : s.counter

    return (
        <div className={s.field}>
            <h1 className={counterClasses}>{counter}</h1>
        </div>
    )
}