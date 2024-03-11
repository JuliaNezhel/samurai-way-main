import { v1 } from "uuid";

let initialState = {
  dialogs: [
    { id: "1", name: "Olga" },
    { id: "2", name: "Tom" },
    { id: "3", name: "Mia" },
  ],
  messages: [
    { id: "1", message: "LOL" },
    { id: "2", message: "sd" },
    { id: "3", message: "Hello" },
  ]
};

export type DialogsPagesType = typeof initialState;

export const dialogsReducer = (
  state: DialogsPagesType = initialState,
  action: DialogsReducerActionType
): DialogsPagesType => {
  switch (action.type) {

    case "SEND-MESSAGE": {
      return {
        ...state,
        messages: [...state.messages, { id: v1(), message: action.newMessage }],
      };
    }
    default:
      return state;
  }
};

export type DialogsReducerActionType = SendMessageACType;

export type SendMessageACType = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = (newMessage:string) => {
  return {
    type: "SEND-MESSAGE",
    newMessage
  } as const;
};
