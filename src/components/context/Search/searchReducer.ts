import { Result } from "../../../interface/IgoogleMaps";
import { searchState } from "./SearchProvider";


type searchActionType = 
  | {type: '[UI] - search', payload: Result[] }
    | {type: '[UI] - clearSearch'}

export const searchReducer = (state:searchState, action:searchActionType): searchState => {
    switch (action.type) {
        case '[UI] - search':

           return {
                ...state,
                search: action.payload
            }

        case '[UI] - clearSearch':
            
            return {
                ...state,
                search: []
            }


        default:
            return state;
    }
}