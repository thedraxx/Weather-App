import React, { useContext } from 'react';
import { ContainerSearch, ContainerSearched, InputSearch, TextCity } from './style'
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SearchContext } from '../../context/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CitiesWeatherContext } from '../../context/CitiesWeather';
import { Colors } from '../../../utilities/colors';

const Search = () => {

  const { handleSearch, address, setAddress, search,clearSearch } = useContext(SearchContext)
  const {addedCity} = useContext(CitiesWeatherContext)

  const handleSubmit = (lat:number,lng:number) => {
    setAddress('')
    addedCity(lat, lng)
    clearSearch()
  }

  return (
    <>
      <ContainerSearch>
        <InputSearch
          value={address}
          onChangeText={setAddress}
          placeholder="Ingrese una dirección"
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon 
          name="search" 
          size={20} 
          color="#f9f9f9" 
          backgroundColor={Colors.tabColor} 
          padding={13}
          margin={6}
          />
        </TouchableOpacity>
      </ContainerSearch>

      <ContainerSearched>
        {
          <FlatList
            keyExtractor={item => item.place_id}
            data={search}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={
                  () => handleSubmit(item.geometry.location.lat, item.geometry.location.lng) 
                }
              >
                <TextCity>{item.formatted_address}</TextCity>
              </TouchableOpacity>
            )}
          />
        }
      </ContainerSearched>
    </>
  )
}

export default Search





