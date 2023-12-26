import { initialize } from "redux-form";
import { v1 } from "uuid";
import { MyPostsType, ProfilePageType } from "./state";

let initialState = {
    posts: [
        {
            id: 1,
            message: "hello",
            imgSrc: "https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg",
            likeCount: 5,
        },
        {
            id: 2,
            message: "Cool",
            imgSrc: "https://gagaru.club/uploads/posts/2023-05/1683027944_gagaru-club-p-milie-kotiki-estetika-krasivo-25.jpg",
            likeCount: 24,
        },
        {
            id: 3,
            message: "Summer",
            imgSrc: "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
            likeCount: 34,
        },
    ],
    newPostText: 'g'
}

export const profileReduser = (state: ProfilePageType = initialState, action: AddPostActionACType | UpdateNewPostTextActionACType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: MyPostsType = {
                id: v1(),
                message: state.newPostText,
                imgSrc: "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
                likeCount: 34,
            };
            state.newPostText = '';
            return { ...state, posts: [...state.posts, newPost] }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return { ...state, newPostText: action.newPost }
        }
        default: return state
    }
}


export type ProfileACType = AddPostActionACType | UpdateNewPostTextActionACType
type AddPostActionACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionACType = ReturnType<typeof updateNewPostTextAC>


export const addPostAC = () => ({
    type: 'ADD-POST'
} as const
)

export const updateNewPostTextAC = (newPost: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPost
} as const
)