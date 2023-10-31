import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem } from './gialogItem/DialogItem';
import { Message } from './message/Message';



export const Dialogs = () => {

    const DialogData = [
        { id: 1, name: 'Olga' },
        { id: 2, name: 'Tom' },
        { id: 3, name: 'Mia' },
    ]

    const MessageData = [
        { id: 1, message: 'LOL' },
        { id: 2, message: 'sd' },
        { id: 3, message: 'ddsd' },
    ]
    const dialogsElement = DialogData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    const messagesElement = MessageData.map(m => <Message message={m.message} />)

    return (
        <section className={s.dialogs}>

            <div>
                {dialogsElement}
            </div>
            <div>
                {messagesElement}
            </div>
            {/* <DialogItem id={4} name={'sss'}/> */}

        </section>
    )
}