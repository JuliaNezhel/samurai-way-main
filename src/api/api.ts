import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "0d0c2965-64f0-4b40-a52d-afe190fd7ea7",
  },
});

export const UsersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 10) => {
    return instance
      .get(`users?page=${pageSize}&count=${currentPage}`)
      .then((res) => {
        return res.data;
      });
  },
  follow: (userID: number) => {
    return instance.post(`follow/${userID}`, null);
  },
  unFollow: (userID: number) => {
    return instance.delete(`follow/${userID}`);
  },
  getUserProfile: (userID: string) => {
    console.warn("старый метод что надо менять");
    return profileAPI.getUserProfile(userID);
  },
};

export const profileAPI = {
  getUserProfile: (userID: string) => {
    return instance.get(`profile/${userID}`);
  },
  getStatus(userID: string) {
    return instance.get(`/profile/status/${userID}`);
  },
  updateStatus: (status: any) => {
    return instance.put("/profile/status", status)

  }
};

export const authAPI = {
  me: () => {
    return instance.get<ResponseType<AuthResponseType>>("auth/me");
  },
};

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

export type ResponseType<T> = {
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
