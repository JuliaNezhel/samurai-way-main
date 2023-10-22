import s from './MyPosts.module.css';
import { Post } from './post/Post'

export const MyPosts = () => {

    const postsData = [
        {
            message: 'hello',
            imgSrc: 'https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg',
            likeCount: 5
        },
        {
            message: 'Cool',
            imgSrc: 'https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg',
            likeCount: 24
        },
        {
            message: 'Summer',
            imgSrc: 'https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg',
            likeCount: 34
        },
    ]

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
                <Post message='hello' imgSrc='https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg' likeCount={5} />
                <Post message='How are you?' imgSrc='https://gagaru.club/uploads/posts/2023-05/1683027944_gagaru-club-p-milie-kotiki-estetika-krasivo-25.jpg' likeCount={5585} />
            </div>
        </div>
    )
}