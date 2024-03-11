import s from './MyPosts.module.css';
import { addPostAC } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';



const mapStateToProps = (state:  AppStateType) => {
    return {
        myPosts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPost: string) => dispatch(addPostAC(newPost)),
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)