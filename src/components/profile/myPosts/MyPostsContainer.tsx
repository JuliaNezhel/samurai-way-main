import s from './MyPosts.module.css';
import { DispatchActionsTypes, MyPostsType, StatePagesType, } from '../../../redux/state';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reduser';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';


type MyPostsPropsTypeContainer = {
    // myPosts: Array<MyPostsType>
    // newPostText: string
    // dispatch: (action: DispatchActionsTypes) => void
    // store: Store<EmptyObject & StatePagesType, any>
}

const mapStateToProps = (state: StatePagesType) => {
    return {
        myPosts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)