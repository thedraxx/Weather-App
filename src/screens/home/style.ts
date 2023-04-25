import styled from 'styled-components/native';
import { Colors } from '../../utilities/colors';



export const ContainerWeather = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;


`

export const ContainerNumberNameCity = styled.View`
    flex-direction: column;
    padding: 10px;
    
`

export const ContainerImageInfo = styled.View`
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`



export const ContainerWeekWeather = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    background-color: ${Colors.Purple};
    padding: 25px;
    justify-content: space-between;
    border-radius: 10px;
`

export const TitleWeatherNumber = styled.Text`
    color: ${Colors.white};
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;


`


export const TitleWeather = styled.Text`
    color: ${Colors.white};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;


`

export const ImageWeather = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
    right: 0;
    bottom: 0;

`