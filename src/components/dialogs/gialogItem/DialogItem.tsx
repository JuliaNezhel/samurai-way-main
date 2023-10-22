import { NavLink } from 'react-router-dom';
import s from './DialogsItems.module.css'


type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) =>{
    return <div className={s.dialogsItems}>
                <div className={s.dialogsItem}>
                    <NavLink to={'/dialog/1' + props.id}>{props.name}</NavLink>
                </div>
                <div className={s.dialogsItem + ' ' + s.active}>
                    <NavLink to='/dialog/2'>Marina</NavLink>
                </div>
            </div>
}