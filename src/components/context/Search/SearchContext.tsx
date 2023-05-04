import { createContext } from 'react';
import { Result } from '../../../interface/IgoogleMaps';

export interface SearchContextProps{
    search: Result[];
    address: string;
    // Methods
    handleSearch: () => void;
    setAddress: (address: string) => void;
    clearSearch: () => void;
}

export const SearchContext = createContext({} as SearchContextProps);