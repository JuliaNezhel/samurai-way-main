export type StoreType = {
    _state: StatePagesType
    subsctiber: (observer: () => void) => void
    getstate: () => StatePagesType
    _callSubscrider: () => void
    // addPost: () => void
    // updateNewPostText: (newPost: string) => void
    dispatch: (action: DispatchActionsTypes) => void
}

export type StatePagesType = {
    profilePage: ProfilePageType;
    dialogsPage: MesssagesPageType;
    sideBar: SideBarPageType;
};

export type ProfilePageType = {
    posts: MyPostsType[];
    newPostText: string
};

export type MyPostsType = {
    message: string;
    imgSrc: string;
    likeCount: number;
    id?: number | string;
};

export type MesssagesPageType = {
    dialogs: DialogItemType[];
    messages: MessageType[];
};

export type MessageType = {
    message: string
    id?: number
}

export type DialogItemType = {
    name: string
    id: number
}

export type SideBarPageType = {
    sideBarDate: SideBarDateType[];
};

export type SideBarDateType = {
    name: string
    id: number
}
export type DispatchActionsTypes = AddPostActionACType | UpdateNewPostTextActionACType
type AddPostActionACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionACType = ReturnType<typeof updateNewPostTextAC>

export const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Olga" },
                { id: 2, name: "Tom" },
                { id: 3, name: "Mia" },
            ],
            messages: [
                { id: 1, message: "LOL" },
                { id: 2, message: "sd" },
                { id: 3, message: "ddsd" },
            ],
        },
        sideBar: {
            sideBarDate: [
                { name: "Tom", id: 1 },
                { name: "Mia", id: 2 },
                { name: "Marina", id: 3 },
            ],
        },
    },
    _callSubscrider() {
        console.log('rerenderEntireTree')
    },
    getstate(): StatePagesType {
        return this._state
    },
    subsctiber(observer: () => void) {
        this._callSubscrider = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                imgSrc: "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
                likeCount: 34,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscrider()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscrider()
        }
    }
}

export const addPostAC = () => ({
    type: 'ADD-POST'
} as const
)

export const updateNewPostTextAC = (newPost: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPost
} as const
)

// window.store =
