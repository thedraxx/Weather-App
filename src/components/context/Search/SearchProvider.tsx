import { useReducer, useState } from 'react';
import { searchReducer } from './searchReducer';
import { SearchContext } from './SearchContext';
import { IgoogleMaps, Result } from '../../../interface/IgoogleMaps';
import googleMapsLocation from '../../../api/googleMapsLocation';

export interface searchState {
    search: Result[];
}

const Search_INITIAL_STATE: searchState = {
    search: [],
};

interface Props {
    children: React.ReactNode;
}

export const SearchProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(searchReducer, Search_INITIAL_STATE)
    const [address, setAddress] = useState('');

    const handleSearch = async () => {

        try {
            // TODO arreglar el process.env
            const { data } = await googleMapsLocation<IgoogleMaps>(`${address}&key=AIzaSyDUVyTycGJzYSs9I7MBQWX4HgDXES6uaHU`)

            if (data.status === 'ZERO_RESULTS') {
                return null
            }

            const datasResult:Result[] = data.results

            dispatch({ type: '[UI] - search', payload: datasResult })

            // setCoordinates({ lat, lng });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SearchContext.Provider value={{
            ...state,
            address,
            handleSearch,
            setAddress,

        }}>
            {children}
        </SearchContext.Provider>
    )
}