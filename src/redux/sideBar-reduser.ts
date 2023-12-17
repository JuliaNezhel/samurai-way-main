import { SideBarPageType } from "./state"

let initialState = {
    sideBarDate: [
        { name: "Tom", id: 1 },
        { name: "Mia", id: 2 },
        { name: "Marina", id: 3 },
    ],
}

export const sideBarReduser = (state: SideBarPageType = initialState, action: SideBarACType):SideBarPageType  => {
    switch (action.type) {

        default: return state
    }
}


export type SideBarACType = any


