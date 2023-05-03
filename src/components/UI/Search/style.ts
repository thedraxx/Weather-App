import styled from 'styled-components/native';
import { Colors } from '../../../utilities/colors';


export const ContainerSearch = styled.View`
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    padding: 0 20px;
    font-size: 15px;
    font-weight: 400;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #ccc;
    margin-bottom: 20px;
`


export const InputSearch = styled.TextInput`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    border:  1px solid #ccc;
    background-color: #fff;
    padding: 0 20px;
    font-size: 15px;
    font-weight: 400;

`

export const ContainerSearched = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonSearch = styled.TouchableOpacity`
    width: 10%;
    height: 50px;
    border-radius: 10px;
    border:  1px solid #ccc;
    background-color: ${Colors.Purple};
    padding: 0 25px;
    font-size: 15px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
`

export const TextCity = styled.Text`
    font-size: 15px;
    font-weight: 400;
    color: ${Colors.lightDark};
    margin-bottom: 10px;


`