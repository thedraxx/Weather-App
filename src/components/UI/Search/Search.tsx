import React from 'react'
import { ContainerSearch, InputSearch } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <ContainerSearch>
    
        <InputSearch type="text" placeholder="Search City..." name="search" />
        <Icon name="search" size={20} color="#000" />
    
    </ContainerSearch>
  )
}

export default Search