import React, { ComponentType } from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPageAC,
  toggleIsFollowingProgressAC,
  unFollow,
} from "../../redux/users-reducer";
import { AppStateType, AppThunkDispatch } from "../../redux/redux-store";
import { Users } from "./Users";
import { Preloader } from "../common/preloader/Loader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
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
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
    currentPage: state.usersPage.currentsPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
  return {
    follow: (userId: number) => {
      dispatch(follow(userId));
    },
    unFollow: (userId: number) => {
      dispatch(unFollow(userId));
    },
    setCurrentPage: (pageNumber: number) =>
      dispatch(setCurrentPageAC(pageNumber)),
    toggleIsFollowingProgress: (isFollowingProgress: boolean, userID: number) =>
      dispatch(toggleIsFollowingProgressAC(isFollowingProgress, userID)),
    getUsers: (pageSize: number, currentPage: number) =>
      dispatch(getUsers(pageSize, currentPage)),
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);
