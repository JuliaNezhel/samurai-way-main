import { Dispatch } from "redux";
import { v1 } from "uuid";
import { UsersAPI, profileAPI } from "../api/api";

export type MyPostsType = {
  id: string;
  message: string;
  imgSrc: string;
  likeCount: number;
};
type ProfilePageType = typeof initialState;

export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
};

let initialState = {
  posts: [
    {
      id: "1",
      message: "hello",
      imgSrc:
        "https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg",
      likeCount: 5,
    },
    {
      id: "2",
      message: "Cool",
      imgSrc:
        "https://gagaru.club/uploads/posts/2023-05/1683027944_gagaru-club-p-milie-kotiki-estetika-krasivo-25.jpg",
      likeCount: 24,
    },
  ],
  newPostText: "g",
  profile: {} as ProfileType,
  status: "",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileACType
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: MyPostsType = {
        id: v1(),
        message: state.newPostText,
        imgSrc:
          "https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625",
        likeCount: 34,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case "UPDATE-NEW-POST-TEXT": {
      return { ...state, newPostText: action.newPost };
    }
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    case "SET-STATUS":
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export type ProfileACType =
  | AddPostActionACType
  | UpdateNewPostTextActionACType
  | SetUserProfileType
  | ReturnType<typeof setStatusAC>;

type AddPostActionACType = ReturnType<typeof addPostAC>;
type UpdateNewPostTextActionACType = ReturnType<typeof updateNewPostTextAC>;
type SetUserProfileType = ReturnType<typeof setUserProfileAC>;

//actions

export const addPostAC = () =>
  ({
    type: "ADD-POST",
  } as const);

export const updateNewPostTextAC = (newPost: string) =>
  ({
    type: "UPDATE-NEW-POST-TEXT",
    newPost,
  } as const);

export const setUserProfileAC = (profile: ProfileType) =>
  ({
    type: "SET-USER-PROFILE",
    profile: profile,
  } as const);

export const setStatusAC = (status: any) =>
  ({
    type: "SET-STATUS",
    status,
  } as const);

// thunks
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  UsersAPI.getUserProfile(userId).then((res) => {
    dispatch(setUserProfileAC(res.data));
  });
};

export const getStatus = (userID: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userID).then((res) => {
    dispatch(setStatusAC(res.data));
  });
};

export const updateStatus =
  (status: any) => (dispatch: Dispatch) => {
    debugger
    profileAPI.updateStatus(status).then((res) => {
      if(res.data.resultCode === 0){
        dispatch(setStatusAC(status));
      }
    });
  };
