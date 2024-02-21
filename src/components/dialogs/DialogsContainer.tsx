import { sendMessageAC, updateNewMessageAC } from "../../redux/dialogs-reduser";
import { AppStateType } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state: AppStateType) => {
  return {
    state: state.dialogsPage,
    isAuth: state.auth.isAuth
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
export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
