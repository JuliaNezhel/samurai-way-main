import { sendMessageAC, updateNewMwssageAC } from '../../redux/dialogs-reduser';
import { DialogsPagesType, DispatchActionsTypes, StatePagesType, } from '../../redux/state';
import { Store, EmptyObject } from "redux";
import { Dialogs } from './Dialogs';

type DialogsContainerPropsType = {
    // state: DialogsPagesType
    // dispatch: (action: DispatchActionsTypes) => void
    store: Store<EmptyObject & StatePagesType, any>

}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        // if (state.newMessagesText.trim() !== '') {
        props.store.dispatch(sendMessageAC())
        // }
    }

    const onChangeHandler = (body: any) => {

        props.store.dispatch(updateNewMwssageAC(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onChangeHandler}
            onSendMessageClick={onSendMessageClick}
            state={state} />
    )
}