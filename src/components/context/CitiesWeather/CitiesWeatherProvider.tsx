import { useEffect, useReducer } from 'react';
import { CitiesWeatherContext, citiesWeatherReducer } from './';
import { IweatherMap } from '../../../interface/IweatherMap';
import weatherMap from '../../../api/weatherMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

    useEffect(() => {
        getCities()
    }, [])

    useEffect(() => {
        handleSaveCities()
    }, [state.ListOfCities])

    const getCities = async () => {
        try {
            const cities = await AsyncStorage.getItem('cities')
            if (cities) {
                dispatch({ type: '[UI] - ADD_CITY', payload: JSON.parse(cities)})
            }
        } catch (error) {
            console.log(error)
            throw new Error("Error al obtener ciudades");
        }
    }

    const handleSaveCities = async () => {
        try {
            await AsyncStorage.setItem('cities', JSON.stringify(state.ListOfCities))
        } catch (error) {
            console.log(error)
            throw new Error("Error al guardar ciudades");
        }
    }

    const addedCity = async (lat: number, long: number) => {
        try {
            const { data } = await weatherMap<IweatherMap>(`?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=65577d14acaf0f03db493ce385ec94a5&units=metric`)
            dispatch({ type: '[UI] - ADD_CITY', payload: [data] })
            handleIsSearching(true)
        } catch (error) {
            console.log(error)
            throw new Error("Error al agregar ciudad");
        }
    }

    const removeCity = async (lat: number, long: number) => {
        state.ListOfCities.map((city, index) => {
            if (city.coord.lat === lat && city.coord.lon === long) {
                dispatch({ type: '[UI] - REMOVE_CITY', payload: { lat, long } })
            }
        }
        )
    }

    const handleIsSearching = (isSearching: boolean) => {
        dispatch({ type: '[UI] - FETCHING_SEARCH', payload: isSearching })
    }

    return (
        <CitiesWeatherContext.Provider value={{
            ...state,
            addedCity,
            handleIsSearching,
            removeCity
        }}>
            {children}
        </CitiesWeatherContext.Provider>
    )
}