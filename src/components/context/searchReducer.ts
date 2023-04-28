import { Location, Result } from "../../interface/IgoogleMaps";
import { searchState } from "./SearchProvider";


type searchActionType = 
  | {type: '[UI] - search', payload: Result[] }

export const searchReducer = (state:searchState, action:searchActionType): searchState => {
    switch (action.type) {
        case '[UI] - search':

           return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }
}