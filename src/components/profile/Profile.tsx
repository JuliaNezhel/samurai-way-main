import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';


type ProfilePropsType = {
    profilePage: ProfilePageType
    // newPostText: any
    addPost: () => void
    updateNewPostText: (newPost: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts 
            myPosts={props.profilePage.posts}  
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}