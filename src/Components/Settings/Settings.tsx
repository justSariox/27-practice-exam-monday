import s from './Settings.module.css'
import {Input} from "../Input/Input";
import {FC} from "react";
import {ISettingsPropsType} from "../../types";



export const Settings: FC<ISettingsPropsType> = ({ min, max, setMin, setMax}) => {
    console.log(max)
    return (
        <div className={s.field}>
            <div className={s.params}>
                <h3>Min value:</h3>
                <Input min={0} value={min} onChange={setMin} />
            </div>
            <div>
                <h3>Max value:</h3>
                <Input value={max} onChange={setMax}/>
            </div>
        </div>
    )
}