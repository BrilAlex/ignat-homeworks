export type SetIsLoadingActionType = {
  type: "SET-IS-LOADING"
  isLoading: boolean
};

const initState = {
  isLoading: false,
};

export const loadingReducer = (state = initState, action: SetIsLoadingActionType): typeof initState => { // any fixed
  switch (action.type) {
    case "SET-IS-LOADING": {
      return {...state, isLoading: !state.isLoading};
    }
    default:
      return state;
  }
};

export const toggleIsLoadingAC = (isLoading: boolean): SetIsLoadingActionType => ({type: "SET-IS-LOADING", isLoading}); // any fixed
