import s from './Settings.module.css'
import {Input} from "../Input/Input";
import {FC} from "react";

type SettingsPropsType = {
    min: number,
    setMin: (minValueRange: number) => void
    max: number
    setMax: (maxValueRange: number) => void
}

export const Settings: FC<SettingsPropsType> = ({ min, max, setMin, setMax}) => {
    return (
        <div className={s.field}>
            <div className={s.params}>
                <h3>Min value:</h3>
                <Input counter={min} setCounter={setMin} min={min} max={max} />
            </div>
            <div>
                <h3>Max value:</h3>
                <Input counter={max} setCounter={setMax} min={min} max={max}/>
            </div>
        </div>
    )
}