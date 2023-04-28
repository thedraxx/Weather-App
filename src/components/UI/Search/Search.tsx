import React, { useContext } from 'react';
import { ContainerSearch, ContainerSearched, InputSearch } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, Text } from 'react-native';
import { SearchContext } from '../../context';
import { FlatList } from 'react-native-gesture-handler';
const Search = () => {

  const { handleSearch, address, setAddress, search } = useContext(SearchContext)

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
              <TouchableOpacity>
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





