import { initialize } from "redux-form";
import { v1 } from "uuid";
import { ProfilePageType } from "./state";

export type UserType = {
    id: string
            fullName: string
            photoUrl: string
            status: string
            followed: boolean
            location: {
                city: string
                country: string
            }
}

let initialState: {users: UserType[]} = {
    users: [

    ],
}

export const usersReduser = (state: any = initialState, action: UsersACType): ProfilePageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: [state.users].map((el) => {
                    el.id === action.userID ? { ...el, followed: true} : el
                })
            }
        }
        case "UNFOLLOW": {
            return { ...state }
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, action.users]}
        }
        
        default: return state
    }
}


export type UsersACType = FollowACType | UnFollowACType | SetUsersType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>


export const setUsersAC = (users: string) => ({
    type: 'SET-USERS',
    users
} as const
)

export const followAC = (userID: string) => ({
    type: 'FOLLOW',
    userID
} as const
)

export const unFollowAC = (userID: string) => ({
    type: 'UNFOLLOW',
    userID
} as const
)
