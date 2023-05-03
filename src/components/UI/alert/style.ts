import styled from 'styled-components/native';
import { Colors } from '../../../utilities/colors';

export const ContainerGeneralModal = styled.View`
  flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`;

export const ContainerModal = styled.View`
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex:1;
`
export const ContainerInfoModal = styled.View`
    padding: 30px;
    background-color: #fff;
    border-radius:15px;
    border: ${Colors.lightDark};


`

export const TitleModal = styled.Text`
    font-size: 15px;
    font-weight: 400;
    color: ${Colors.lightDark};
    text-align: center;
    margin-bottom: 10px;


`

export const PressableButton = styled.TouchableOpacity`
    background-color: ${Colors.lightDark};
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;


`

export const TextButtonModal = styled.Text`
    color: ${Colors.white};
    font-size: 15px;
    font-weight: 400;
    
`