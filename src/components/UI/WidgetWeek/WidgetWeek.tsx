import React from 'react'
import { ContainerDay, ContainerDetail, ContainerInfo, ContainerInfoWeatherCity, ContainerNumberNameCity, ContainerWeekWeather, TitleDay, TitleViewDetail, TitleWeather, TitleWeatherCity, TitleWeatherNumber } from './style'
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigator/Navigator';

const WidgetWeek = () => {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Detail'>;
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
      <ContainerWeekWeather>


        <ContainerNumberNameCity>
          <ContainerDay>
            <TitleDay>Today</TitleDay>
          </ContainerDay>

          <ContainerInfo>
            <TitleWeatherNumber>30º</TitleWeatherNumber>
            <ContainerInfoWeatherCity>
              <TitleWeather>Sunny</TitleWeather>
              <TitleWeatherCity>Montral,Canada</TitleWeatherCity>
            </ContainerInfoWeatherCity>
          </ContainerInfo>

        </ContainerNumberNameCity>

 
      <ContainerDetail>
      <TouchableWithoutFeedback
      onPress={() =>   navigation.navigate('Detail')}
      >
          <TitleViewDetail>
              View 
          </TitleViewDetail>
          </TouchableWithoutFeedback>
        </ContainerDetail>



      </ContainerWeekWeather>



    </>
  )
}

export default WidgetWeek