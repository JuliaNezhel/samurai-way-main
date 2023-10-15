import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';



export const Navbar = () => {
    
    return <nav className={s.nav}>
        <ul>
            <li className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/dialog' activeClassName={s.active}>Messages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to='/setting' activeClassName={s.active}>Setting</NavLink>
            </li>
        </ul>
    </nav>
}
