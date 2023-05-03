import styled from 'styled-components/native';
import { Colors } from '../../utilities/colors';

export const ContainerWeather = styled.View`
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
`

export const TitleWelcome  = styled.Text`
    color: ${Colors.black};
    font-size: 30px;
    font-weight: bold;

`

export const TitleLoadMore  = styled.Text`
    color: ${Colors.black};
    font-size: 15px;
    font-weight: 400;

`

export const ContainerTitleAndLoadMore = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;



`