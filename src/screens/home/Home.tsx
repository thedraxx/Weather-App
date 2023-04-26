import React from 'react'
import { ContainerWeather, TitleWelcome } from './style'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text } from 'react-native'
import WidgetWeek from '../../components/UI/WidgetWeek/WidgetWeek'


const Home = () => {
  return (
    <LinearGradient
      colors={["#272a44", "#5936b4"]}
      style={styles.linearGradient}
    >
      <TitleWelcome>
        Week Weather! 
      </TitleWelcome>
      <ContainerWeather>

        <WidgetWeek />

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