import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialog/1'>Olga</NavLink>
                </div>
                <div className={s.dialogsItem + ' ' + s.active}>
                    <NavLink to='/dialog/2'>Marina</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialog/3'>Vera</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti iusto, sint libero expedita unde eos non nisi sequi dolorum, modi, repudiandae delectus. Distinctio fuga magni impedit quia iusto consequuntur?</div>
                <div className={s.massage}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti iusto, sint libero expedita unde eos non nisi sequi dolorum, modi, repudiandae delectus. Distinctio fuga magni impedit quia iusto consequuntur?</div>
                <div className={s.massage}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti iusto, sint libero expedita unde eos non nisi sequi dolorum, modi, repudiandae delectus. Distinctio fuga magni impedit quia iusto consequuntur?</div>
            </div>
        </section>
    )
}