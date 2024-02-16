import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { SideBar } from "./sideBar/SideBar";
import { SideBarPageType } from "../../redux/sideBar-reduser";

type NavbarPropstype = {
  state: SideBarPageType;
};

export const Navbar = (props: NavbarPropstype) => {
  const activClss = (param: any) => (param.isActive ? s.active : "");

  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" className={activClss}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialog" className={activClss}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" className={activClss}>
            {" "}
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/users" className={activClss}>
            Users
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/setting" className={activClss}>
            Setting
          </NavLink>
        </li>
      </ul>
      <SideBar sideBarDate={props.state} />
    </nav>
  );
};
