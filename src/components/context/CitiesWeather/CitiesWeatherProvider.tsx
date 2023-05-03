import { useReducer } from 'react';
import { CitiesWeatherContext, citiesWeatherReducer } from './';
import { IweatherMap } from '../../../interface/IweatherMap';
import weatherMap from '../../../api/weatherMap';

export interface CitiesWeatherState {
    ListOfCities: IweatherMap[];
    isSearching: boolean;
}

const CitiesWeather_INITIAL_STATE: CitiesWeatherState = {
    ListOfCities: [],
    isSearching: false
};

interface Props {
    children: React.ReactNode;
}

export const CitiesWeatherProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(citiesWeatherReducer, CitiesWeather_INITIAL_STATE)

    const handleIsSearching = (isSearching: boolean) => {
        dispatch({ type: '[UI] - FETCHING_SEARCH', payload: isSearching })
    }

    const addedCity = async (lat: number, long: number) => {

        try {
            // TODO: mover apiKey a .env
            const { data } = await weatherMap<IweatherMap>(`?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=65577d14acaf0f03db493ce385ec94a5&units=metric`)
            dispatch({ type: '[UI] - ADD_CITY', payload: [data] })
            handleIsSearching(true)
        } catch (error) {
            console.log(error)
            throw new Error("Error al agregar ciudad");
        }
    }

    return (
        <CitiesWeatherContext.Provider value={{
            ...state,
            addedCity,
            handleIsSearching
        }}>
            {children}
        </CitiesWeatherContext.Provider>
    )
}