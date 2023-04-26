import React from 'react'
import { ContainerImageInfo, ContainerNumberNameCity, ContainerWeekWeather, TitleWeather, TitleWeatherCity, TitleWeatherNumber } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

const WidgetWeek = () => {
  return (
    <>
      <ContainerWeekWeather>

        <ContainerNumberNameCity>
          <TitleWeather>Monday</TitleWeather>
          <TitleWeatherNumber>30º</TitleWeatherNumber>
          <TitleWeather>Montral,Canada</TitleWeather>
        </ContainerNumberNameCity>

        <ContainerImageInfo>
          <Icon name="sun-o" size={110} color="#fff" />
          <TitleWeatherCity>Sun</TitleWeatherCity>
        </ContainerImageInfo>

      </ContainerWeekWeather>

      

    </>
  )
}

export default WidgetWeek