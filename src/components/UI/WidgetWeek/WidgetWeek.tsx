import React, { useContext } from 'react'
import { ContainerDay, ContainerDetail, ContainerInfo, ContainerInfoWeatherCity, ContainerNumberNameCity, ContainerWeekWeather, Footer, TitleDay, TitleViewDetail, TitleWeather, TitleWeatherCity, TitleWeatherNumber } from './style'
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigator/Navigator';
import { CitiesWeatherContext } from '../../context/CitiesWeather';

const WidgetWeek = () => {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Detail'>;
  const navigation = useNavigation<homeScreenProp>();
  const { ListOfCities } = useContext(CitiesWeatherContext)

  return (
    <>
      {
        ListOfCities.length === 0 || !ListOfCities ? <TitleDay>Empty</TitleDay>
          :
          <FlatList
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={ListOfCities}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item ) => (
              <ContainerWeekWeather>
                <ContainerNumberNameCity>
                  <ContainerDay>
                    <TitleDay>Today</TitleDay>
                  </ContainerDay>

                  <ContainerInfo>
                    <TitleWeatherNumber>
                      {item.item.main.temp}°</TitleWeatherNumber>
                    <ContainerInfoWeatherCity>
                      <TitleWeather>
                        {item.item.weather.map( 
                          (item) => item.main
                      )}</TitleWeather>
                      <TitleWeatherCity>{item.item.name}</TitleWeatherCity>
                    </ContainerInfoWeatherCity>
                  </ContainerInfo>

                </ContainerNumberNameCity>

                <ContainerDetail>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Detail', {
                      lat: item.item.coord.lat,
                      lon: item.item.coord.lon,
                    })}
                  >
                    <TitleViewDetail>
                      View
                    </TitleViewDetail>
                  </TouchableWithoutFeedback>
                </ContainerDetail>
              </ContainerWeekWeather>
            )}
            ListFooterComponent={() => <Footer />}
          />
      }
    </>
  )
}

export default WidgetWeek