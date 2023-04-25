import React from 'react'
import { ContainerImageInfo, ContainerNumberNameCity, ContainerWeather, ContainerWeekWeather, ImageWeather, TitleWeather, TitleWeatherNumber } from './style'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <LinearGradient
    colors={["#272a44", "#5936b4" ]}
    style={styles.linearGradient}
    >
    <ContainerWeather>
      
      <ContainerWeekWeather>
        <ContainerNumberNameCity>
        <TitleWeather>Monday</TitleWeather>
          <TitleWeatherNumber>30º</TitleWeatherNumber>
          <TitleWeather>Montral,Canada</TitleWeather>

        </ContainerNumberNameCity>
        <ContainerImageInfo>
        <ImageWeather source={require('../../../assets/sun.png')} />
        <TitleWeather>Monday</TitleWeather>
        </ContainerImageInfo>

      </ContainerWeekWeather>

    </ContainerWeather>
    </LinearGradient>
  )
}

export default Home


// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },

});