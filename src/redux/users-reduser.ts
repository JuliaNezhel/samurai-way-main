export type UserType = {
  id: string;
  name: string;
  photos: PhotosUsersType;
  status: string;
  followed: boolean;
  uniqueUrlName: null
  // location: {
  //   city: string;
  //   country: string;
  // };
};


export type PhotosUsersType = {
  small: string | null;
  large: string | null;
};

let initialState = {
  users: [] as UserType[],
};

export type UsersPageType = {
  users: UserType[];
};

export const usersReduser = (
  state: UsersPageType = initialState,
  action: UsersACType
): UsersPageType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case "SET-USERS": {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export type UsersACType = FollowACType | UnFollowACType | SetUsersType;
type FollowACType = ReturnType<typeof followAC>;
type UnFollowACType = ReturnType<typeof unFollowAC>;
type SetUsersType = ReturnType<typeof setUsersAC>;

export const setUsersAC = (users: UserType[]) =>
  ({
    type: "SET-USERS",
    users,
  } as const);

export const followAC = (userID: string) =>
  ({
    type: "FOLLOW",
    userID,
  } as const);

export const unFollowAC = (userID: string) =>
  ({
    type: "UNFOLLOW",
    userID,
  } as const);
