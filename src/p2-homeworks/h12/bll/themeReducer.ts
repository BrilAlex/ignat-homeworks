type ChangeThemeActionType = {
  type: "CHANGE-THEME"
  theme: string
};

const initState: string = "some";

export const themeReducer = (state = initState, action: ChangeThemeActionType): string => { // any fixed
  switch (action.type) {
    case "CHANGE-THEME": {
      return action.theme;
    }
    default:
      return state;
  }
};

export const changeThemeAC = (theme: string): ChangeThemeActionType => {
  return {type: "CHANGE-THEME", theme};
}; // any fixed