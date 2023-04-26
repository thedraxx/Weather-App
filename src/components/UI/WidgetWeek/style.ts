import styled from 'styled-components/native';
import { Colors } from '../../../utilities/colors';

export const ContainerImageInfo = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const ContainerNumberNameCity = styled.View`
    flex-direction: column;
    padding: 10px;
`

export const ContainerWeekWeather = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    background-color: ${Colors.Purple};
    padding: 25px;
    justify-content: space-between;
    border-radius: 30px;
    margin-bottom: 20px;
    
`

export const ImageWeather = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
    right: 0;
    bottom: 0;
`

export const TitleWeather = styled.Text`
    color: ${Colors.white};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const TitleWeatherCity = styled.Text`
    color: ${Colors.white};
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
`

export const TitleWeatherNumber = styled.Text`
    color: ${Colors.white};
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
`