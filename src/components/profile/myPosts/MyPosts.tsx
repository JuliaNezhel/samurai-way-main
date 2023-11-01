import s from './MyPosts.module.css';
import { Post } from './post/Post'

type MyPostsPropsType = {
    myPosts: Array<MyPosts>
}

export type MyPosts = {
    message: string
    imgSrc: string
    likeCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.myPosts.map(p => <Post
        message={p.message}
        imgSrc={p.imgSrc}
        likeCount={p.likeCount} />)

    return (
        <div className={s.postsBlok}>
            <h3>My posts</h3>
            <div>
                New post
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}