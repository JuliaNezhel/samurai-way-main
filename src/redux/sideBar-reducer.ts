export type SideBarPageType = typeof initialState;

let initialState = {
  sideBarDate: [
    { name: "Tom", id: 1 },
    { name: "Mia", id: 2 },
    { name: "Marina", id: 3 },
  ],
};

export const sideBarReducer = (
  state: SideBarPageType = initialState,
  action: SideBarACType
): SideBarPageType => {
  switch (action.type) {
    default:
      return state;
  }
};

export type SideBarACType = any;
