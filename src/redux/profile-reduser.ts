import { ProfilePageType } from "./state";

export const profileReduser = (state: ProfilePageType, action: AddPostActionACType | UpdateNewPostTextActionACType):ProfilePageType  => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 4,
                message: state.newPostText,
                imgSrc: "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
                likeCount: 34,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newPost;
            return state
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
} as const)