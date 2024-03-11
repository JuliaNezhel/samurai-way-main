import s from './MyPosts.module.css';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';


type MyPostsPropsTypeContainer = {
    // myPosts: Array<MyPostsType>
    // newPostText: string
    // dispatch: (action: DispatchActionsTypes) => void
    // store: Store<EmptyObject & StatePagesType, any>
}

const mapStateToProps = (state:  AppStateType) => {
    return {
        myPosts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)