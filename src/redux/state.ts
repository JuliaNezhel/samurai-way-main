import { dialogsReduser, DialogsReduserActionType } from "./dialogs-reduser";
import { ProfileACType, profileReduser } from "./profile-reduser";

type StoreType = {
  _state: StatePagesType;
  subsctiber: (observer: () => void) => void;
  getstate: () => StatePagesType;
  _callSubscrider: () => void;
  dispatch: (action: any) => void;
};

type StatePagesType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPagesType;
  sideBar: SideBarPageType;
};

type ProfilePageType = {
  posts: MyPostsType[];
  newPostText: string;
};

type MyPostsType = {
  message: string;
  imgSrc: string;
  likeCount: number;
  id?: number | string;
};

type DialogsPagesType = {
  dialogs: DialogItemType[];
  messages: MessageType[];
  newMessagesText: string | number;
};

type MessageType = {
  message: any;
  id: number | string;
};

type DialogItemType = {
  name: string;
  id: number;
};

type SideBarPageType = {
  sideBarDate: SideBarDateType[];
};
type SideBarDateType = {
  name: string;
  id: number;
};
export type DispatchActionsTypes = ProfileACType | DialogsReduserActionType;

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "hello",
          imgSrc:
            "https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg",
          likeCount: 5,
        },
        {
          id: 2,
          message: "Cool",
          imgSrc:
            "https://gagaru.club/uploads/posts/2023-05/1683027944_gagaru-club-p-milie-kotiki-estetika-krasivo-25.jpg",
          likeCount: 24,
        },
        {
          id: 3,
          message: "Summer",
          imgSrc:
            "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
          likeCount: 34,
        },
      ],
      newPostText: "g",
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
      newMessagesText: "",
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
    console.log("rerenderEntireTree");
  },
  getstate(): StatePagesType {
    return this._state;
  },
  subsctiber(observer: () => void) {
    this._callSubscrider = observer;
  },
  dispatch(action) {
    // this._state.profilePage = profileReduser(this._state.profilePage, action)
    // this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)

    this._callSubscrider();
  },
};

// @ts-ignore
window.store = store;
