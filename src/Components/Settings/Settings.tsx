import s from './Settings.module.css'
import {Input} from "../Input/Input";
import {FC} from "react";

type SettingsPropsType = {
    min: number,
    setMin: (newMin: number) => void
    max: number
    setMax: (newMin: number) => void
}

export const Settings: FC<SettingsPropsType> = ({ min, max, setMin, setMax}) => {
    console.log(max)
    return (
        <div className={s.field}>
            <div className={s.params}>
                <h3>Min value:</h3>
                <Input key={min} min={min} value={min} onChange={setMin} />
            </div>
            <div>
                <h3>Max value:</h3>
                <Input value={max} onChange={setMax}/>
            </div>
        </div>
    )
}