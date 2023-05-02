import { createContext } from 'react';
import { IweatherMap } from '../../../interface/IweatherMap';

export interface CitiesWeatherContextProps{
    ListOfCities: IweatherMap [];

    addedCity: (lat: number, long: number) => void;
}

export const CitiesWeatherContext = createContext({} as CitiesWeatherContextProps);