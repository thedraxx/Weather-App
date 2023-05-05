import React from 'react'
import { ContainerTitleAndLoadMore, ContainerWeather, TitleLoadMore, TitleWelcome } from './style'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text } from 'react-native'
import WidgetWeek from '../../components/UI/WidgetWeek/WidgetWeek'


const Home = () => {
  return (
    <LinearGradient
      colors={["#f6f6f6", "#ffffff"]}
      style={styles.linearGradient}
    >
      <ContainerTitleAndLoadMore>
      <TitleWelcome>
        Weather Today
      </TitleWelcome>
      <TitleLoadMore>
        Load More
      </TitleLoadMore>
      </ContainerTitleAndLoadMore>

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