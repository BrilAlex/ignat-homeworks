import {UserType} from "../HW8";

type SortActionType = {
  type: "sort"
  payload: "up" | "down"
};

type CheckActionType = {
  type: "check"
  payload: number
};

type ActionType = SortActionType | CheckActionType;

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // any fixed
  switch (action.type) {
    case 'sort': {
      // fixed
      const newState = [...state].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });

      return action.payload === "up" ? newState : newState.reverse();
    }
    case 'check': {
      // fixed
      return state.filter(u => u.age >= action.payload);
    }
    default:
      return state;
  }
};
