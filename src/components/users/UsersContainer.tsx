import React from "react";
import { connect } from "react-redux";
import {
  UserType,
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  toggIsFollowingProgressAC,
  toggleIsFetchingAC,
} from "../../redux/users-reduser";
import { unFollowAC } from "./../../redux/users-reduser";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { Users } from "./Users";
import { Preloader } from "../common/Loader";
import { UsersAPI } from "../header/api/api";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount(): void {
    UsersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(
      (data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      }
    );
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    UsersAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render(): React.ReactNode {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            {...this.props}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            carrentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.carrenstPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId: number) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumder: number) =>
      dispatch(setCurrentPageAC(pageNumder)),
    setTotalCount: (totalCount: number) =>
      dispatch(setTotalCountAC(totalCount)),
    toggleIsFetching: (iIsFetching: boolean) =>
      dispatch(toggleIsFetchingAC(iIsFetching)),
    toggIsFollowingProgress: (isFollowingProgress: boolean, userID: number) =>
      dispatch(toggIsFollowingProgressAC(isFollowingProgress, userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
