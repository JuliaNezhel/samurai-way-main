import s from './MyPosts.module.css';
import { Post } from './post/Post'
import React, { useRef } from 'react';
import { DispatchActionsTypes, MyPostsType, StatePagesType, } from '../../../redux/state';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reduser';
import { MyPosts } from './MyPosts';
import { Store, EmptyObject } from "redux";
import { StoreContext } from '../../../StoreContext';

type MyPostsPropsTypeContainer = {
    // myPosts: Array<MyPostsType>
    // newPostText: string
    // dispatch: (action: DispatchActionsTypes) => void
    // store: Store<EmptyObject & StatePagesType, any>
}

export const MyPostsContainer = (props: MyPostsPropsTypeContainer) => {
    // let store = props.store.getState()

    // const addPost = () => {
    //     if (props.store.getState().profilePage.newPostText.trim() != '') {
    //         props.store.dispatch(addPostAC())
    //     }
    // }

    // const onPostText = (text: string) => {
    //     props.store.dispatch(updateNewPostTextAC(text))
    // }

    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState()

                const addPost = () => {
                    if (store.getState().profilePage.newPostText.trim() != '') {
                        store.dispatch(addPostAC())
                    }
                }
            
                const onPostText = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
            

                return <MyPosts 
                addPost={addPost} 
                updateNewPostText={onPostText} 
                myPosts={state.profilePage.posts} 
                newPostText={state.profilePage.newPostText} />

            }
        }

        </StoreContext.Consumer>
    )
}