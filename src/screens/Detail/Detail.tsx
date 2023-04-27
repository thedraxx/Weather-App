import React from 'react'
import { View, Text } from 'react-native'
import { BackgroundContainer, ContainerData, ContainerIcon, Day, DetailDay, InfoWeather } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

const Detail = () => {
  return (
    <BackgroundContainer>
        
        <ContainerIcon>
        <Icon name="cloud" size={300} color="white" />
        </ContainerIcon>

      <ContainerData>
        <InfoWeather>24</InfoWeather>
        <DetailDay>Rainy / Sunny</DetailDay>
        <Day>Monday, 28 April</Day>
      </ContainerData>

    </BackgroundContainer>
  )
}

export default Detail