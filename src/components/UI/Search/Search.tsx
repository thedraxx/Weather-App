import React, { useState } from 'react';
import { ContainerSearch, InputSearch } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, Text } from 'react-native';
const Search = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);


  const handleGetCoordinates = async () => {
    const apiKey = 'AIzaSyDUVyTycGJzYSs9I7MBQWX4HgDXES6uaHU';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const json = await response.json();

      console.log(json);

      const { lat, lng } = json.results[0].geometry.location;

      setCoordinates({ latitude: lat, longitude: lng });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>

      <ContainerSearch>

        <InputSearch
          value={address}
          onChangeText={setAddress}
          placeholder="Ingrese una dirección"
        />
      <TouchableOpacity  onPress={handleGetCoordinates}>
      <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>


      </ContainerSearch>

      {coordinates && (
        <Text>
          Las coordenadas son: {coordinates.latitude}, {coordinates.longitude}
        </Text>
      )}

    </>
  )
}

export default Search





