import React, { useEffect, useState } from 'react'
import { BackgroundContainer, ContainerData, ContainerDetailInfo, ContainerHumidity, ContainerIcon, ContainerRain, ContainerWind, Day, DetailDay, InfoWeather, TextSubTitle, TextTitle } from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../../navigator/Navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import weatherMap from '../../api/weatherMap';
import { IweatherMap } from '../../interface/IweatherMap';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Detail'> { }

const Detail = ({ route }: Props) => {
const [DetailCity, setDetailCity] = useState({} as IweatherMap)
  const { lat, lon } = route.params;

  useEffect(() => {
    getDetailCity()
  }, [])

  const getDetailCity = async () => {
    const { data } = await weatherMap<IweatherMap>(`?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=65577d14acaf0f03db493ce385ec94a5&units=metric`)
    setDetailCity(data)
  }

  return (
    <BackgroundContainer>

      <ContainerIcon>
        <Icon name="cloud" size={250} color="white" />
      </ContainerIcon>

      <ContainerData>
        <InfoWeather>24</InfoWeather>
        <DetailDay>Rainy / Sunny</DetailDay>
        <Day>Monday, 28 April</Day>
      </ContainerData>

      <ContainerDetailInfo>
        <ContainerHumidity>
          <Icon name="tint" size={30} color="black" />
          <TextTitle>24%</TextTitle>
          <TextSubTitle>Humidity</TextSubTitle>
        </ContainerHumidity>
        <ContainerRain>
          <IconFeather name="cloud-rain" size={30} color="black" />
          <TextTitle>78%</TextTitle>
          <TextSubTitle>Chance of Rain</TextSubTitle>
        </ContainerRain>
        <ContainerWind>
          <IconFeather name="wind" size={30} color="black" />
          <TextTitle>24km/h</TextTitle>
          <TextSubTitle>Wind</TextSubTitle>
        </ContainerWind>

      </ContainerDetailInfo>

    </BackgroundContainer>
  )
}

export default Detail