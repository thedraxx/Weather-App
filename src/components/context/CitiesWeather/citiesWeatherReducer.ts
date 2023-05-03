import { IweatherMap } from '../../../interface/IweatherMap';
import { CitiesWeatherState } from './';

type CitiesWeatherStateType = 
| {type: '[UI] - FETCHING_SEARCH', payload:boolean}
  | {type: '[UI] - ADD_CITY', payload:IweatherMap[]
}

export const citiesWeatherReducer = (state:CitiesWeatherState, action:CitiesWeatherStateType): CitiesWeatherState => {
    switch (action.type) {
        case '[UI] - ADD_CITY':

           return {
                ...state,
                ListOfCities: [...state.ListOfCities, ...action.payload]
            }

        case '[UI] - FETCHING_SEARCH':
            return {
                ...state,
                isSearching: action.payload
            }


        default:
            return state;
    }
}