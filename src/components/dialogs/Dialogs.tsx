import { MesssagesPageType } from '../../redux/state';
import s from './Dialogs.module.css'
import { DialogItem } from './gialogItem/DialogItem';
import { Message } from './message/Message';

type DialogsPropsType = {
    state: MesssagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {




    const dialogsElement = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    const messagesElement = props.state.messages.map(m => <Message message={m.message} key={m.id} />)

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