import React, { useContext } from 'react';
import { ContainerSearch, ContainerSearched, InputSearch } from './style'
import { TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SearchContext } from '../../context/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CitiesWeatherContext } from '../../context/CitiesWeather';


const Search = () => {

  const { handleSearch, address, setAddress, search } = useContext(SearchContext)
  const {addedCity} = useContext(CitiesWeatherContext)

  return (
    <>

      <ContainerSearch>
        <InputSearch
          value={address}
          onChangeText={setAddress}
          placeholder="Ingrese una dirección"
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </ContainerSearch>

      <ContainerSearched>
        {
          <FlatList
            keyExtractor={item => item.place_id}
            data={search}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => addedCity(item.geometry.location.lat, item.geometry.location.lng)}
              >
                <Text>{item.formatted_address}</Text>
              </TouchableOpacity>
            )}
          />
        }
      </ContainerSearched>
    </>
  )
}

export default Search





