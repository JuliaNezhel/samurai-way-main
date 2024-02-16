import React from "react";
import s from "./Profile.module.css";
import { Profile } from "./Profile";
import axios from "axios";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, setUserProfileAC } from "../../redux/profile-reduser";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
  userId: string;
};
type PropsType = RouteComponentProps<PathParamsType> & OnPropsType;

type OnPropsType = MapDispatchToPropsType & MapStateToPropsType;

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    let userId = this.props.match?.params?.userId;
    if (!userId) {
      userId = "2";
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserProfile: (user: ProfileType) => dispatch(setUserProfileAC(user)),
  };
};

let withUrlDataCOntainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataCOntainerComponent);
