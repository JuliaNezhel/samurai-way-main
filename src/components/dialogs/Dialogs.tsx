import { DialogsPagesType } from "../../redux/dialogs-reducer";
import s from "./Dialogs.module.css";
import { DialogItem } from "./dialogItem/DialogItem";
import { Message } from "./message/Message";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

type DialogsPropsType = {
  state: DialogsPagesType;
  onSendMessageClick: (newMessage: string) => void;
};

type FormDataType = {
  newMessageBody: string;
};

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  const messagesElement = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addNewMessage = (data: FormDataType) => {
    props.onSendMessageClick(data.newMessageBody);
  };

  return (
    <section className={s.dialogs}>
      <div>{dialogsElement}</div>
      <div>
        {messagesElement}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </section>
  );
};

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"newMessageBody"}
        placeholder={"Please, start typing"}
      />
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm<FormDataType>({
  form: "dialogAddMessageForm",
})(AddMessageForm);
