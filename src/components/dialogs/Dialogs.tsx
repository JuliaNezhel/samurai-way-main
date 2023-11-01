import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem, DialogItemType } from './gialogItem/DialogItem';
import { Message, MessageType } from './message/Message';

type DialogsPropsType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {




    const dialogsElement = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    const messagesElement = props.messages.map(m => <Message message={m.message} key={m.id} />)

    return (
        <section className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messagesElement}
            </div>
        </section>
    )
}