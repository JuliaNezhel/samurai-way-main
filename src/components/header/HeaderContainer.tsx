import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { AuthResponseType, ResponsrType } from "./api/api";
import { setUserDataAC } from "../../redux/auth-reduser";

//type
type PropsType = OnPropsType;

type OnPropsType = MapDispatchToPropsType & MapStateToPropsType;

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    axios
      .get<ResponsrType<AuthResponseType>>(
        `https://social-network.samuraijs.com/api/1.0//auth/me`,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.setUserData(res.data.data);
        }
      });
  }

  render(): React.ReactNode {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserData: (data: AuthResponseType) => dispatch(setUserDataAC(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
