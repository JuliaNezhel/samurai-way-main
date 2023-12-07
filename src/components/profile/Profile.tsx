import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { DispatchActionsTypes, ProfilePageType } from '../../redux/state';


type ProfilePropsType = {
    profilePage: ProfilePageType
    // newPostText: string
    // addPost: () => void
    // updateNewPostText: (newPost: string) => void
    dispatch: (action: DispatchActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts 
            myPosts={props.profilePage.posts}  
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
            />
        </div>
    )
}