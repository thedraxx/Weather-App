import { createContext } from 'react';
import { IweatherMap } from '../../../interface/IweatherMap';

export interface CitiesWeatherContextProps{
    ListOfCities: IweatherMap [];
    isSearching: boolean;

    addedCity: (lat: number, long: number) => void;
    handleIsSearching: (isSearching: boolean) => void;
    removeCity: (lat: number, long: number) => void;
}

export const CitiesWeatherContext = createContext({} as CitiesWeatherContextProps);