import React, { ComponentType } from "react";
import s from "./Profile.module.css";
import { Profile } from "./Profile";
import { AppStateType, AppThunkDispatch } from "../../redux/redux-store";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reduser";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

//type
type PathParamsType = {
  userId: string;
};
type PropsType = RouteComponentProps<PathParamsType> & OnPropsType;
type OnPropsType = MapDispatchToPropsType & MapStateToPropsType;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

//class Component
class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    let userId = this.props.match?.params?.userId;
    if (!userId) {
      userId = "30458";
    }
    this.props.setUserProfile(userId);
    this.props.getUserStatus(userId)
  }

  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} profile={this.props.profile}  status={this.props.status}  updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}

// функции для connect
let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
  return {
    setUserProfile: (userId: string) => dispatch(getUserProfile(userId)),
    getUserStatus: (userId: string)=> dispatch(getStatus(userId)),
    updateStatus: (status: any)=> dispatch(updateStatus(status))
  };
};

// compose всех оболочек
export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  withRouter
)(ProfileContainer);
