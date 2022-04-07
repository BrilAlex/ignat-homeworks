type InitStateType = typeof initState;

export type SetIsLoadingActionType = {
  type: "SET-IS-LOADING"
};

const initState = {
  isLoading: false,
};

export const loadingReducer = (state = initState, action: SetIsLoadingActionType): InitStateType => { // any fixed
  switch (action.type) {
    case "SET-IS-LOADING": {
      return {...state, isLoading: !state.isLoading};
    }
    default:
      return state;
  }
};

export const toggleIsLoadingAC = (): SetIsLoadingActionType => ({type: "SET-IS-LOADING"}); // any fixed
