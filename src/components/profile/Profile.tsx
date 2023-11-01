import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts myPosts={props.state.myPosts} />
        </div>
    )
}