import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';
import { addPost } from './../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (message: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts myPosts={props.state.myPosts}  addPost={props.addPost}/>
        </div>
    )
}