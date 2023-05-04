import React, { useContext} from 'react'
import { BottomGoDetail, ContainerDay, ContainerDetail, ContainerInfo, ContainerInfoWeatherCity, ContainerNothingToSee, ContainerNumberNameCity, ContainerWeekWeather, TitleDay, TitleViewDetail, TitleWeather, TitleWeatherCity, TitleWeatherNumber } from './style'
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
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
        ListOfCities.length === 0 || !ListOfCities   ? 
        <ContainerNothingToSee>
        <TitleDay>Nothing To See Here!</TitleDay>
        </ContainerNothingToSee>
          :   
          <FlatList
            data={ListOfCities}
            keyExtractor={(item) => Math.random().toString()}
            showsVerticalScrollIndicator={false}
            renderItem={(item ) => (
              
              <ContainerWeekWeather
                temp={item.item.weather.map( 
                  (item) => item.main
              )}
              >
                <ContainerNumberNameCity> 
                  <ContainerDay>
                    <TitleDay>Today</TitleDay>
                  </ContainerDay>
                  <ContainerInfo>
                    <TitleWeatherNumber>
                      {Math.round(item.item.main.temp)}°</TitleWeatherNumber>
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
                  <BottomGoDetail
                    onPress={() => navigation.navigate('Detail', {
                      lat: item.item.coord.lat,
                      lon: item.item.coord.lon,
                    })}
                  >
                    <TitleViewDetail>
                      View
                    </TitleViewDetail>
                  </BottomGoDetail>
                </ContainerDetail>
              </ContainerWeekWeather>
            )}
          />
      }
    </>
  )
}

export default WidgetWeek