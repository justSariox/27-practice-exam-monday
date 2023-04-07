import s from './Input.module.css'
import {ChangeEvent, FC} from "react";


type InputPropsType = {
    counter: number
    setCounter: (counter: number) => void
    min: number
    max: number
}

export const Input:FC<InputPropsType> = ({counter, setCounter, max, min }) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value)
        setCounter(value)

    }


    return (

            <input
                className={s.input}
                type="number"
                value={counter}
                min={0 }
                onChange={onChangeInputHandler}

            />

    )

}