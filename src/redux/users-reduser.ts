export type UserType = {
  id: number;
  name: string;
  photos: PhotosUsersType;
  status: string;
  followed: boolean;
  uniqueUrlName: any;
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
  pageSize: 100,
  totalCount: 50,
  carrenstPage: 1,
  isFetching: true,
};

export type UsersPageType = typeof initialState;

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
      return { ...state, users: action.users };
    }
    case "SET-CURRENT-PAGE": {
      return { ...state, carrenstPage: action.currentPage };
    }
    case "SET-TOTAL-COUNT": {
      return { ...state, totalCount: action.totalCount };
    }
    case "TOGGLE-IS-FETCHING": {
      return { ...state, isFetching: action.iIsFetching };
    }

    default:
      return state;
  }
};

export type UsersACType =
  | FollowACType
  | UnFollowACType
  | SetUsersType
  | SetCurrentPageType
  | SetTotalCountType
  | ToggleIsFetchingType;

type FollowACType = ReturnType<typeof followAC>;
type UnFollowACType = ReturnType<typeof unFollowAC>;
type SetUsersType = ReturnType<typeof setUsersAC>;
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>;
type SetTotalCountType = ReturnType<typeof setTotalCountAC>;
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>;

export const setUsersAC = (users: UserType[]) =>
  ({
    type: "SET-USERS",
    users,
  } as const);

export const followAC = (userID: number) =>
  ({
    type: "FOLLOW",
    userID,
  } as const);

export const unFollowAC = (userID: number) =>
  ({
    type: "UNFOLLOW",
    userID,
  } as const);

export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: "SET-CURRENT-PAGE",
    currentPage,
  } as const);

export let setTotalCountAC = (totalCount: number) => {
  return {
    type: "SET-TOTAL-COUNT",
    totalCount,
  } as const;
};

export let toggleIsFetchingAC = (iIsFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    iIsFetching,
  } as const;
};
