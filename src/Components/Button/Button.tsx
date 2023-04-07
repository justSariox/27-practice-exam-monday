import {FC, ReactNode} from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    callBack?: () => void
    disabled?: boolean | undefined
    counter?: number | undefined
}

export const Button: FC<ButtonPropsType> = ({title, callBack, disabled}) => {

    const ButtonStyles = `
    ${s.button}
    ${disabled ? s.disable : ''}
    `

    return <button disabled={disabled} className={ButtonStyles} onClick={callBack}>{title}</button>
}