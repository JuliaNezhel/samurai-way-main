import s from './MyPosts.module.css';
import { Post } from './post/Post'
import React, { useRef } from 'react';
import { MyPostsType } from '../../../redux/state';

type MyPostsPropsType = {
    myPosts: Array<MyPostsType>
    addPost: (message: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.myPosts.map(p => <Post 
        key={p.id}
        message={p.message}
        imgSrc={p.imgSrc}
        likeCount={p.likeCount} />)


    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }
    return (
        <div className={s.postsBlok}>
            <h3>My posts</h3>
            <div>
                New post
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button className={s.button} onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}