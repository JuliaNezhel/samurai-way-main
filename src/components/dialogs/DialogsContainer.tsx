import { sendMessageAC, updateNewMwssageAC } from '../../redux/dialogs-reduser';
import { StatePagesType } from '../../redux/state';
import { Store, EmptyObject } from "redux";
import { Dialogs } from './Dialogs';
import { StoreContext } from '../../StoreContext';

type DialogsContainerPropsType = {
    // state: DialogsPagesType
    // dispatch: (action: DispatchActionsTypes) => void
    // store?: Store<EmptyObject & StatePagesType, any>

}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    // let state = props.store.getState().dialogsPage

    // const onSendMessageClick = () => {
    //     // if (state.newMessagesText.trim() !== '') {
    //     props.store.dispatch(sendMessageAC())
    //     // }
    // }

    // const onChangeHandler = (body: any) => {

    //     props.store.dispatch(updateNewMwssageAC(body))
    // }

    return (

        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    // if (state.newMessagesText.trim() !== '') {
                    store.dispatch(sendMessageAC())
                    // }
                }

                const onChangeHandler = (body: any) => {

                    store.dispatch(updateNewMwssageAC(body))
                }
                return <Dialogs
                    updateNewMessageBody={onChangeHandler}
                    onSendMessageClick={onSendMessageClick}
                    state={state} />
            }

            }
        </StoreContext.Consumer>

    )
}