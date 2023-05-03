import s from './Input.module.css'
import {ChangeEvent, FC} from "react";


type InputPropsType = {
    value: number
    onChange: (value: number) => void
    min?: number | undefined
}

export const Input:FC<InputPropsType> = ({value, onChange, min }) => {
    console.log(value)
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(+e.currentTarget.value)
    }


    return (

            <input

                className={s.input}
                type="number"
                value={value}
                min={min}
                onChange={onChangeInputHandler}

            />

    )

}