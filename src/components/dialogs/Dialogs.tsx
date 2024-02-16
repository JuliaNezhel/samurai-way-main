import { DialogsPagesType } from "../../redux/dialogs-reduser";
import s from "./Dialogs.module.css";
import { DialogItem } from "./gialogItem/DialogItem";
import { Message } from "./message/Message";

type DialogsPropsType = {
  state: DialogsPagesType;
  // dispatch: (action: DispatchActionsTypes) => void
  updateNewMessageBody: (a: any) => void;
  onSendMessageClick: () => void;
};

export const Dialogs = (props: DialogsPropsType) => {
  console.log(props.state.newMessagesText);

  const dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  const messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const sentMessage = () => {
    // if (props.state.newMessagesText.trim() !== '') {
    //     props.dispatch(sendMessageAC())
    // }
    props.onSendMessageClick();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(event.currentTarget.value);
    // props.dispatch(updateNewMwssageAC(event.currentTarget.value))
  };

  return (
    <section className={s.dialogs}>
      <div>{dialogsElement}</div>
      <div>
        {messagesElement}
        <div>
          <textarea
            value={props.state.newMessagesText}
            onChange={onChangeHandler}
            placeholder={"Please, start typing"}
          />
          <button onClick={sentMessage}>send</button>
        </div>
      </div>
    </section>
  );
};
