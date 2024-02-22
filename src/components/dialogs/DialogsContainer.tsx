import { Redirect } from "react-router-dom";
import { sendMessageAC, updateNewMessageAC } from "../../redux/dialogs-reduser";
import { AppStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { ComponentType } from "react";

const mapStateToProps = (state: AppStateType) => {
  return {
    state: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewMessageBody: (body: any) => {
      dispatch(updateNewMessageAC(body));
    },
    onSendMessageClick: () => {
      dispatch(sendMessageAC());
    },
  };
};



// let AuthRedirectComponent = withAuthRedirect();

export const DialogsContainer =  compose<ComponentType>(
  connect(    mapStateToProps,    mapDispatchToProps  ),
  withAuthRedirect
)(Dialogs)