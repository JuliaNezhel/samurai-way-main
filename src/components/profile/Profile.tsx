import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { DispatchActionsTypes, ProfilePageType, StatePagesType } from '../../redux/state';
import {Store, EmptyObject} from "redux";
import { MyPostsContainer } from './myPosts/MyPostsContainer';


type ProfilePropsType = {
    profilePage: ProfilePageType
    store: Store<EmptyObject & StatePagesType, any>
    // newPostText: string
    // addPost: () => void
    // updateNewPostText: (newPost: string) => void
    dispatch: (action: DispatchActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            {/* <MyPosts 
            myPosts={props.profilePage.posts}  
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
            /> */}
            <MyPostsContainer  store={props.store}/>
        </div>
    )
}