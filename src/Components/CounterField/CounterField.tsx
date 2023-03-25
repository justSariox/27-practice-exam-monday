import s from './CounterField.module.css'
import {FC} from "react";

type CounterFieldPropsType = {
    counter: number
}

export const CounterField: FC<CounterFieldPropsType> = ({counter}) => {

    const counterClasses = counter === 5 ? s.counterMax : s.counter

    return (
        <div className={s.field}>
            <h1 className={counterClasses}>{counter}</h1>
        </div>
    )
}