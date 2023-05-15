import s from './CounterField.module.css'
import {FC} from "react";
import {ICounterFieldPropsType} from "../../types";




export const CounterField: FC<ICounterFieldPropsType> = ({counter, max}) => {

    const counterClasses = counter === max ? s.counterMax : s.counter

    return (
        <div className={s.field}>
            <h1 className={counterClasses}>{counter}</h1>
        </div>
    )
}