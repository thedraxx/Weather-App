import React, { useContext, useEffect, useState } from 'react'
import { BackgroundContainer, ContainerBackButton, ContainerData, BottonGoBack, ContainerDetailInfo, ContainerHumidity, ContainerIcon, ContainerRain, ContainerWind, Day, DetailDay, InfoWeather, TextSubTitle, TextTitle } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../../navigator/Navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IweatherMap } from '../../interface/IweatherMap';
import { CitiesWeatherContext } from '../../components/context/CitiesWeather';
import { useNavigation } from '@react-navigation/native';
import ModalAlert from '../../components/UI/alert/ModalAlert';
import ModalAlertCityRemoved from '../../components/UI/alert/ModalAlertCityRemoved';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Detail'> { }

const Detail = ({ route }: Props) => {
  const [DetailCity, setDetailCity] = useState({} as IweatherMap)
  const { ListOfCities, removeCity } = useContext(CitiesWeatherContext)
  const { lat, lon } = route.params;
  const Navigation = useNavigation()

  useEffect(() => {
    getDetailCity()
  }, [])

  const getDetailCity = async () => {
    ListOfCities.forEach(city => {
      if (city.coord.lat === lat && city.coord.lon === lon) {
        setDetailCity(city)
      }
    })
  }

  return (
    <>
      <ModalAlertCityRemoved
        text={"City Removed"}
      />
      {
        Object.keys(DetailCity).length === 0
          ? <TextTitle>Empty</TextTitle> :

          <BackgroundContainer
            temp={
              DetailCity.weather.map((item) => item.main)
            }
          >

            <ContainerBackButton>
              <BottonGoBack
                onPress={() => Navigation.goBack()}
              >
                <IconFeather name="arrow-left" size={42} color="white" />
              </BottonGoBack>

              <BottonGoBack
                onPress={() => removeCity(lat, lon)}
              >
                <IconMaterialCommunityIcons name="delete" size={42} color="white" />
              </BottonGoBack>
            </ContainerBackButton>
            <ContainerIcon>
              {
                DetailCity.weather.map((item) =>
                  item.main === 'Clouds'
                    ? <Icon name="cloud" size={170} color="white" />
                    : item.main === 'Rain'
                      ? <Icon name="tint" size={170} color="white" />
                      : <Icon name="sun-o" size={170} color="white" />)
              }
            </ContainerIcon>
            <ContainerData>
              <InfoWeather>{Math.round(DetailCity.main.temp)}</InfoWeather>
              <DetailDay>{
                DetailCity.weather.map((item) => item.main)
              }</DetailDay>
              <Day>
                {
                  new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                }</Day>
            </ContainerData>
            <ContainerDetailInfo>
              <ContainerHumidity>
                <Icon name="tint" size={30} color="black" />
                <TextTitle>{DetailCity.main.humidity}%</TextTitle>
                <TextSubTitle>Humidity</TextSubTitle>
              </ContainerHumidity>
              <ContainerRain>
                <IconFeather name="cloud-rain" size={30} color="black" />
                <TextTitle>
                  {
                    DetailCity.main.pressure
                  }</TextTitle>
                <TextSubTitle>Pressure</TextSubTitle>
              </ContainerRain>
              <ContainerWind>
                <IconFeather name="wind" size={30} color="black" />
                <TextTitle>{DetailCity.wind.speed}km/h</TextTitle>
                <TextSubTitle>Wind</TextSubTitle>
              </ContainerWind>
            </ContainerDetailInfo>
          </BackgroundContainer>
      }
    </>
  )
}

export default Detail