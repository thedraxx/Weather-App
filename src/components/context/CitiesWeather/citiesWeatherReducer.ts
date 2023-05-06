import { IweatherMap } from '../../../interface/IweatherMap';
import { CitiesWeatherState } from './';

type CitiesWeatherStateType = 
    | {type: '[UI] - FETCHING_SEARCH', payload:boolean}
    | {type: '[UI] - ADD_CITY', payload:IweatherMap[]}
    | {type: '[UI] - REMOVE_CITY', payload:any}
    | {type: '[UI] - FETCHING_DELETE', payload:boolean}

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

        case '[UI] - REMOVE_CITY':
            return {
                ...state,
                ListOfCities: state.ListOfCities.filter((city) => city.coord.lat !== action.payload.lat && city.coord.lon !== action.payload.lon)
            }
        
        case '[UI] - FETCHING_DELETE':
            return {
                ...state,
                isDeleting: action.payload
            }


        

        default:
            return state;
    }
}