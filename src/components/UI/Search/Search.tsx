import React, { useContext } from 'react';
import { ContainerSearch, ContainerSearched, InputSearch, TextCity } from './style'
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SearchContext } from '../../context/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CitiesWeatherContext } from '../../context/CitiesWeather';

const Search = () => {

  const { handleSearch, address, setAddress, search } = useContext(SearchContext)
  const {addedCity} = useContext(CitiesWeatherContext)

  const handleSubmit = (lat:number,lng:number) => {
    setAddress('')
    addedCity(lat, lng)
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
          backgroundColor="#5936B4" 
          borderRadius={150}
          padding={13}
          margin={5}
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





