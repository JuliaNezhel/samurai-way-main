import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type HeaderPropsType = {
  isAuth: boolean;
  login: string | null;
};

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img
        src="https://w.forfun.com/fetch/20/20b05e3c6f22049f92066dcba20107db.jpeg"
        className={s.logo}
      ></img>
      <span> Ocean</span>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
