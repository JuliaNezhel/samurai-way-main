import s from './Message.module.css'

export type MessageTypeProps = {
    message: string
    id?: number
}


export const Message = (props: MessageTypeProps) => {
    return (
        <div className={s.massages}>
            <div className={s.massage}>{props.message}</div>
        </div>
    )
}