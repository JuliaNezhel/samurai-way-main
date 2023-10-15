import s from './Post.module.css';

type PostTypeProps = {
    message: string
    imgSrc: string
    likeCount?: number
}

export const Post = (props: PostTypeProps) => {
    return (
        <div className={s.item}>
            <img src={props.imgSrc}></img>
            {props.message}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}