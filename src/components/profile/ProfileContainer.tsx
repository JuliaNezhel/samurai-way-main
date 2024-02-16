import React from "react";
import s from "./Profile.module.css";
import { Profile } from "./Profile";
import axios from "axios";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, setUserProfileAC } from "../../redux/profile-reduser";

type PropsType = any;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props}  profile = {this.props.profile}/>
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
    setUserProfile: (user: ProfileType) => dispatch(setUserProfileAC(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
