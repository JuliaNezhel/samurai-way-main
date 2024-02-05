import { connect } from "react-redux";
import {
  UserType,
  UsersPageType,
  followAC,
  setUsersAC,
} from "../../redux/users-reduser";
import { unFollowAC } from "./../../redux/users-reduser";
import { Users } from "./Users";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  usersPage: UsersPageType;
};

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
};

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    usersPage: state.usersPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: string) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId: string) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
