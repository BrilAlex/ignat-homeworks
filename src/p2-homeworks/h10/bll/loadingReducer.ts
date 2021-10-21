export type LoadingType = {
    isLoading: boolean
}

type SetLoadingAT = {
    type: "SET-LOADING"
    isLoading: boolean
}

const initState: LoadingType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: SetLoadingAT): LoadingType => { // any fixed
    switch (action.type) {
        case "SET-LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): SetLoadingAT => ({type: "SET-LOADING", isLoading}); // any fixed