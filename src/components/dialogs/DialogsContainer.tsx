import { sendMessageAC } from "../../redux/dialogs-reducer";
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
    onSendMessageClick: (newMessage:string) => {
      dispatch(sendMessageAC(newMessage));
    },
  };
};



export const DialogsContainer =  compose<ComponentType>(
  connect(    mapStateToProps,    mapDispatchToProps  ),
  withAuthRedirect
)(Dialogs)