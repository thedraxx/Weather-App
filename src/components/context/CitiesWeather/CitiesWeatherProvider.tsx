import { useReducer } from 'react';
import { CitiesWeatherContext,citiesWeatherReducer } from './';
import { IweatherMap } from '../../../interface/IweatherMap';
import weatherMap from '../../../api/weatherMap';

export interface CitiesWeatherState {
    ListOfCities: IweatherMap[];
}

const CitiesWeather_INITIAL_STATE: CitiesWeatherState = {
    ListOfCities:[],
};

interface Props {
children: React.ReactNode;
}

export const CitiesWeatherProvider = ({ children }:Props) => {

    const [state, dispatch] = useReducer(citiesWeatherReducer, CitiesWeather_INITIAL_STATE)

    const addedCity = async(lat: number, long:number) => {

        // TODO: mover apiKey a .env
       
        const {data}= await weatherMap<IweatherMap>(`?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=65577d14acaf0f03db493ce385ec94a5&units=metric`)


        dispatch({type:'[UI] - ADD_CITY', payload:[data]})
    }

   return (
        <CitiesWeatherContext.Provider value={{
           ...state,
           addedCity
        }}>
            {children}
        </CitiesWeatherContext.Provider>
  )
}