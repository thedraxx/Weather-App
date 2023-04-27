import styled from 'styled-components/native';
import { Colors } from '../../utilities/colors';

export const BackgroundContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${Colors.Cardpurple};
    align-items: center;
    justify-content: center;

`;


export const ContainerIcon = styled.View`
    width: 100%;
    align-items: flex-end;
    
`

export const ContainerData = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const InfoWeather = styled.Text`
    font-size: 150px;
    color: ${Colors.white};
    font-weight: bold;
    margin-bottom: 5px;
    

`   

export const DetailDay = styled.Text`
    font-size: 25px;
    color: ${Colors.white};
    font-weight: 300;
    margin-bottom: 5px;
    text-transform: capitalize;

`

export const Day = styled.Text`
    font-size: 15px;
    color: ${Colors.white};
    font-weight: 200;
    margin-bottom: 5px;
    text-transform: capitalize;
`