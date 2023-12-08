import { DialogsPagesType } from "./state"

export const dialogsReduser = (state: DialogsPagesType, action: DialogsReduserActionType): DialogsPagesType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            state.newMessagesText = action.newMessage
            return state
        }
        case "SEND-MESSAGE": {
            let body = state.newMessagesText
            state.newMessagesText = ""
            state.messages.push({ id: 2, message: body });
            return state
        }
        default: return state
    }
}

export type DialogsReduserActionType =  UpdateNewMwssageType | SendMessageACType

export type UpdateNewMwssageType = ReturnType<typeof updateNewMwssageAC>
export const updateNewMwssageAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessage
    } as const
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}