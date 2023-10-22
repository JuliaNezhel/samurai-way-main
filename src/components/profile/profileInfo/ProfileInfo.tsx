import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.containerImg}>
                <img src='https://w-dog.ru/wallpapers/10/0/536091371634844/krasivyj-vodopad-vodopad-tropiki-yarkon-solnce-krasivoe-nebo-oblaka-raj.jpg' className={s.contentIMG} ></img>
            </div>
            <div className={s.deckriptionBlok}>
                ava + description
            </div>
        </div>
    )
}