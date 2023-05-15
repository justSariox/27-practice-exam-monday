import s from './Operations.module.css'
import {Button} from "../Button/Button";
import {FC} from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import {IOperationsPropsType} from "../../types";


export const Operations: FC<IOperationsPropsType> = ({
                                                        increment,
                                                        reset,
                                                        counter,
                                                        min,
                                                        max,
                                                        setInitial
}) => {


    const location = useLocation()
    const {pathname} = location
    const Navigate = useNavigate()

    const SettingsPage = () => {
        setInitial()
        Navigate('*/settings')
        if (location.pathname === '*/settings') {
            Navigate('*/counter')
        localStorage.setItem('counterValue', JSON.stringify(counter))
        }
    }

    const switchButtons = (pathname: string) => {
        switch (pathname) {
            case '/settings':
                return (
                    <Button title={'SET'} callBack={SettingsPage}/>
                )
            case '/counter':
            default:
                return (
                    <>
                        <Button title={'INC'} callBack={increment} disabled={counter === max}/>
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