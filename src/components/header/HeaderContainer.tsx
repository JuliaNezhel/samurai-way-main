import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppStateType, AppThunkDispatch } from "../../redux/redux-store";
import { setUserData } from "../../redux/auth-reduser";

//type
type PropsType = OnPropsType;

type OnPropsType = MapDispatchToPropsType & MapStateToPropsType;

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    this.props.setUserData();
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

const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
  return {
    setUserData: () => dispatch(setUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
