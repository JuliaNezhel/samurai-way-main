import s from './Message.module.css'

export type MessageType = {
    message: string
    id?: number
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.massages}>
            <div className={s.massage}>{props.message}</div>
        </div>
    )
}