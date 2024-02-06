import React from "react";
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
import axios from "axios";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = {
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumder: number) => void;
  setTotalCount: (totalCount: number) => void;
};

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

export class UsersContainer extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.carrentPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((res) => this.props.setUsers(res.data.items));
  };

  render(): React.ReactNode {
    return (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        carrentPage={this.props.carrentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
      />
    );
  }
}

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

export  default  connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
