import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';

type ProfilePropsType = {
    myPosts:  Array<MyPosts>
}

export const Profile = (props: ProfilePropsType) => {



    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts myPosts={props.myPosts} />
        </div>
    )
}