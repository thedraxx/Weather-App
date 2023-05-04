import styled from 'styled-components/native';
import { Colors } from '../../../utilities/colors';

export const ContainerNothingToSee = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${Colors.white};
`

export const ContainerWeekWeather = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;  
    width: 100%;
    height: 350px;
    background-color: ${ (props: { temp: string; }) => props.temp[0]=== 'Clear' ? Colors.orange : Colors.LightPurple};
    border-radius: 30px;
    margin-bottom: 70px;
`

export const ContainerNumberNameCity = styled.View`
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 20px;
    margin-top:20px;
    width: 100%;
    
    
`

export const ContainerDay = styled.View`
    background-color: rgba(255,255,255, 0.2);
    width: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-bottom: 10px;
    padding: 5px;
`


export const ContainerInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    margin-left: 5px;
`

export const ContainerImageInfo = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`


export const ContainerInfoWeatherCity = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    margin-top: 10px;
    justify-content: center;
    width: 100%;
    height: 100%;
`


export const ContainerDetail = styled.View`
    align-items: center;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 30px;
`

export const BottomGoDetail = styled.TouchableOpacity`
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255, 0.2);
    border: 1px solid ${Colors.white};
    
`

export const TitleViewDetail    = styled.Text`
    color: ${Colors.white};
    font-size: 20px;
    font-weight: 300;
    margin-left: 5px;
    margin-right: 5px;
    padding-left: 45px;
    padding-right: 45px;
    padding-top:10px;
    padding-bottom: 10px;
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
    font-size: 20px;
    font-weight: 400;
`

export const TitleWeatherCity = styled.Text`
    color: ${Colors.white};
    font-size: 15px;
    font-weight: 300;
`


export const TitleDay = styled.Text`
    color: ${Colors.white};
    font-size: 20px;
    font-weight: 500;

`

export const TitleWeatherNumber = styled.Text`
    color: ${Colors.white};
    font-size: 45px;
    font-weight: bold;
`

