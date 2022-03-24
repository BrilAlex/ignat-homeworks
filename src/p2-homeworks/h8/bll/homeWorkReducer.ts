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
      return action.payload === "up"
        ? [...state].sort((a, b) => a.name <= b.name ? -1 : 1)
        : [...state].sort((a, b) => b.name <= a.name ? -1 : 1);
    }
    case 'check': {
      // fixed
      return state.filter(u => u.age >= action.payload);
    }
    default:
      return state;
  }
};