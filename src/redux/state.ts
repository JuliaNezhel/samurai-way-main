import { DialogItemType } from "../components/dialogs/gialogItem/DialogItem"
import { MessageType } from "../components/dialogs/message/Message"
import { MyPosts } from "../components/profile/myPosts/MyPosts"

// type AppPropsType = {
//     state: stateType
//   }
  
  type StateType = {
    myPosts: MyPosts[]
    dialogs: DialogItemType[]
    messages: MessageType[]
  }

export const state:StateType = {
    myPosts: [
        {
            message: 'hello',
            imgSrc: 'https://i.pinimg.com/originals/7c/3c/c4/7c3cc48731ce742f600e90219cb3ce17.jpg',
            likeCount: 5
        },
        {
            message: 'Cool',
            imgSrc: 'https://gagaru.club/uploads/posts/2023-05/1683027944_gagaru-club-p-milie-kotiki-estetika-krasivo-25.jpg',
            likeCount: 24
        },
        {
            message: 'Summer',
            imgSrc: 'https://w.forfun.com/fetch/fe/fe22186dba2df35f07573604aa8a0e63.jpeg?w=1470&r=0.5625',
            likeCount: 34
        },
    ],
    dialogs: [
        { id: 1, name: 'Olga' },
        { id: 2, name: 'Tom' },
        { id: 3, name: 'Mia' },
    ],
    messages: [
        { id: 1, message: 'LOL' },
        { id: 2, message: 'sd' },
        { id: 3, message: 'ddsd' },
    ],
}

