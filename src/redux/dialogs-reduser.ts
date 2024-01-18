import { v1 } from "uuid"
import { DialogsPagesType } from "./state"


let initialState = {
    dialogs: [
        { id: 1, name: "Olga" },
        { id: 2, name: "Tom" },
        { id: 3, name: "Mia" },
    ],
    messages: [
        { id: 1, message: "LOL" },
        { id: 2, message: "sd" },
        { id: 3, message: "Hello" },
    ],
    newMessagesText: 'start message',
}

export const dialogsReduser = (state: DialogsPagesType = initialState, action: DialogsReduserActionType): DialogsPagesType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            // state.newMessagesText = action.newMessage
            return {...state, newMessagesText: action.newMessage}
        }
        case "SEND-MESSAGE": {
            let body = state.newMessagesText
            return {...state, messages: [...state.messages, { id: v1(), message: body, }], newMessagesText: ''}
        }
        default: return state
    }
}

export type DialogsReduserActionType =  UpdateNewMessageType | SendMessageACType

export type UpdateNewMessageType = ReturnType<typeof updateNewMessageAC>
export const updateNewMessageAC = (newMessage: string) => {
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