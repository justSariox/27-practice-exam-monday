import s from './Operations.module.css'
import {Button} from "../Button/Button";
import {FC} from "react";
import {useLocation, useNavigate} from 'react-router-dom'


type OperationsPropsType = {
    increment?: () => void
    reset?: () => void
    counter: number
    min: number
    max: number
}


export const Operations: FC<OperationsPropsType> = ({increment, reset, counter, min, max}) => {
    const location = useLocation()
    const {pathname} = location
    const Navigate = useNavigate()

    const SettingsPage = () => {
        Navigate('/settings')
        if (pathname === '/settings') {
            Navigate('/counter')
        localStorage.setItem('counterValue', JSON.stringify(counter))
        }
    }

    const switchButtons = (pathname: string) => {
        switch (pathname) {
            case 'settings':
                return (
                    <Button title={'SET'} callBack={SettingsPage}/>
                )
            default:
                return (
                    <>
                        <Button title={'INC'} callBack={increment} disabled={counter >= max}/>
                        <Button title={'RESET'} callBack={reset} disabled={counter === min}/>
                        <Button title={'SET'} callBack={SettingsPage}/>
                    </>
                )
        }
    }

    const renderedButtons = switchButtons(pathname)

    return (
        <div className={s.buttonsField}>
            {renderedButtons}
        </div>
    )
}