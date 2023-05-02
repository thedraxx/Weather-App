import { IweatherMap } from '../../../interface/IweatherMap';
import { CitiesWeatherState } from './';

type CitiesWeatherStateType = 
  | {type: '[UI] - ADD_CITY', payload:IweatherMap[]
}

export const citiesWeatherReducer = (state:CitiesWeatherState, action:CitiesWeatherStateType): CitiesWeatherState => {
    switch (action.type) {
        case '[UI] - ADD_CITY':

           return {
                ...state,
                ListOfCities: [...state.ListOfCities, ...action.payload]
            }

        default:
            return state;
    }
}