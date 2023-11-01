import { NavLink } from 'react-router-dom';
import s from './DialogsItems.module.css'


export type DialogItemType = {
    name: string
    id: number
}



export const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialogsItems}>
        <div className={s.dialogsItem + ' ' + s.active}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
}