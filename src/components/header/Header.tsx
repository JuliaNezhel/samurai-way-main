import s from './Header.module.css';

export const Header = () => {
    return <header className={s.header}>
        <img src='https://w.forfun.com/fetch/20/20b05e3c6f22049f92066dcba20107db.jpeg' className={s.logo}></img>
        <span> Ocean</span>
    </header>


};