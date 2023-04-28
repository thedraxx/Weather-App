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
    padding: 12px;
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

export const ContainerDetailInfo = styled.View`

    width: 100%;
    height: 20%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    bottom: 0;
    z-index: 1;
    margin-bottom: 25px;

`

export const ContainerHumidity = styled.View`
   width: auto;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-direction: column;
    border: 1px solid ${Colors.white};
    padding: 10px;
    border-radius:25px;
    background-color: ${Colors.white};
`

export const ContainerWind = styled.View`
   width: auto;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-direction: column;
    border: 1px solid ${Colors.white};
    padding: 10px;
    border-radius:25px;
    background-color: ${Colors.white};

`

export const ContainerRain = styled.View`
   width: auto;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-direction: column;
    border: 1px solid ${Colors.white};
    padding: 10px;
    border-radius:25px;
    background-color: ${Colors.white};

`

export const TextTitle = styled.Text`
    font-size: 17px;
    color: ${Colors.black};
    font-weight: 200;
    margin-bottom: 5px;
    text-transform: capitalize;
`
export const TextSubTitle = styled.Text`
    font-size: 15px;
    color: ${Colors.black};
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: capitalize;
`