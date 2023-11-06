import { NavLink } from 'react-router-dom';
import { SideBarPageType } from '../../redux/state';
import s from './Navbar.module.css';
import { SideBar,} from './sideBar/SideBar';

type NavbarPropstype = {
    state: SideBarPageType
}

export const Navbar = (props: NavbarPropstype) => {

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
        <SideBar sideBarDate={props.state.sideBarDate} />
    </nav>
}
