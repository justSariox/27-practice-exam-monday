import {FC} from "react";
import s from './Button.module.css'
import {IButtonPropsType} from "../../types";




export const Button: FC<IButtonPropsType> = ({
                                                 title,
                                                 callBack,
                                                 disabled}) => {

    const ButtonStyles = `
    ${s.button}
    ${disabled ? s.disable : ''}
    `

    return <button disabled={disabled} className={ButtonStyles} onClick={callBack}>{title}</button>
}