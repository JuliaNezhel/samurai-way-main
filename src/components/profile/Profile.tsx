import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.containerImg}>
                <img src='https://w-dog.ru/wallpapers/10/0/536091371634844/krasivyj-vodopad-vodopad-tropiki-yarkon-solnce-krasivoe-nebo-oblaka-raj.jpg' className={s.contentIMG} ></img>
            </div>
            <div >
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}