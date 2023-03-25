import s from './Operations.module.css'
import {Button} from "../Button/Button";
import {FC} from "react";
type OperationsPropsType = {
    increment: () => void
    reset: () => void
    counter: number
}


export const Operations: FC<OperationsPropsType> = ({increment, reset, counter}) => {


    return (
        <div className={s.buttonsField}>
            <Button  title={'INC'} callBack={increment} disabled={counter >= 5}/>
            <Button  title={'RESET'} callBack={reset} disabled={counter === 0}/>
        </div>
    )
}