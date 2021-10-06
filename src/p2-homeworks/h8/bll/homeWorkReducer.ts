import {UserType} from "../HW8";

type SortNameActionType = {
    type: "sort"
    payload: "up" | "down"
}
type CheckAgeActionType = {
    type: "check"
    payload: number
}
type ActionTypes = SortNameActionType | CheckAgeActionType;

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // any fixed
    switch (action.type) {
        case 'sort': {
            // fixed
            if(action.payload === "up") {
                 return state.map(s => ({...s})).sort(function (a, b) {
                    return a.name > b.name ? 1 : ((a.name < b.name) ? -1 :  0);
                });
            } else {
                return state.map(s => ({...s})).sort(function(a,b){
                    return a.name < b.name ? 1 : ((a.name > b.name) ? -1 : 0);
                });
            }
        }
        case 'check': {
            // fixed
            return state.filter(s => s.age >= action.payload);
        }
        default: return state
    }
}