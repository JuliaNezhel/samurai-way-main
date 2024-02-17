import axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const UsersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 10) => {
    return instanse
    .get(`users?page=${pageSize}&count=${currentPage}`)
    .then((res) => {
      return res.data;
    });
  },
  follow: (userID: number) => {
    return instanse.post(
      `follow/${userID}`, null 
    )
  },
  unfollow: (userID: number) => {
    return instanse.delete(
      `follow/${userID}` 
    )
  }
}


//type

type GetUserType = {
  items: UsersGetItemType[];
  totalCount: 25823;
  error: null;
};

type UsersGetItemType = {
  name: string;
  id: number;
  uniqueUrlName: any;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string;
  followed: boolean;
};

export type ResponsrType<T> = {
  data: T;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};

export type AuthResponseType = {
  id: number;
  login: string;
  email: string;
};
