import { connect } from "react-redux";
import {
  UserType,
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
} from "../../redux/users-reduser";
import { unFollowAC } from "./../../redux/users-reduser";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { Users } from "./Users";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumder: number) => void;
  setTotalCount: (totalCount: number) => void;
};

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    carrentPage: state.usersPage.carrenstPage,
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
    setCurrentPage: (pageNumder: number) => {
      dispatch(setCurrentPageAC(pageNumder));
    },
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
