import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { SideBar } from "./sideBar/SideBar";
import { SideBarPageType } from "../../redux/sideBar-reducer";

type NavbarPropsType = {
  state: SideBarPageType;
};

export const Navbar = (props: NavbarPropsType) => {
  const activeClass = (param: any) => (param.isActive ? s.active : "");

  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" className={activeClass}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialog" className={activeClass}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" className={activeClass}>
            {" "}
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/users" className={activeClass}>
            Users
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/setting" className={activeClass}>
            Setting
          </NavLink>
        </li>
      </ul>
      <SideBar sideBarDate={props.state} />
    </nav>
  );
};
