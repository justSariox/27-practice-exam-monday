import s from './Input.module.css'
import {ChangeEvent, FC} from "react";
import {IInputPropsType} from "../../types";


export const Input: FC<IInputPropsType> = ({value, onChange, min}) => {
    console.log(value)
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(+e.currentTarget.value)

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