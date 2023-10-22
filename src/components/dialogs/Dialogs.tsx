import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem } from './gialogItem/DialogItem';
import { Message } from './message/Message';



export const Dialogs = () => {

    const DialogData = [
        {id: 1, name:'Olga'},
        {id: 2, name:'Tom'},
        {id: 3, name:'Mia'},
    ]

    const MessageData = [
        {id: 1, name:'LOL'},
        {id: 2, name:'sd'},
        {id: 3, name:'ddsd'},
    ]

    return (
        <section className={s.dialogs}>
            <DialogItem id={4} name={'sss'}/>
            <Message message='LOL'/>
        </section>
    )
}