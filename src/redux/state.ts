export type StatePagesType = {
    profilePage: ProfilePageType;
    dialogsPage: MesssagesPageType;
    sideBar: SideBarPageType;
};

export type ProfilePageType = {
    myPosts: MyPostsType[];
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

let rerenderEntireTree = () => {
    console.log('rerenderEntireTree')
}

export const state: StatePagesType = {
    profilePage: {
        myPosts: [
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
        newPostText: ''
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
};

export let addPost = () => {
    const newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        imgSrc: "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
        likeCount: 34,
    };
    state.profilePage.myPosts.push(newPost);
    updateNewPostText("")
    rerenderEntireTree()
};

export let updateNewPostText = (newPost: string) => {
    state.profilePage.newPostText = newPost;
    rerenderEntireTree()
};

export const subsctiber = (observer: any) => {
    rerenderEntireTree = observer
}