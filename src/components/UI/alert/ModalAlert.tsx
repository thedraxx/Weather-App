import React, {useContext} from 'react';
import {Modal} from 'react-native';
import { ContainerGeneralModal, ContainerInfoModal, ContainerModal, PressableButton, TextButtonModal, TitleModal } from './style';
import { CitiesWeatherContext } from '../../context/CitiesWeather';

interface Props {
  text:string
}


const ModalAlert = ({text}:Props) => {
  const {handleIsSearching,isSearching} = useContext(CitiesWeatherContext)


  return (
    <ContainerGeneralModal>
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSearching}>
      <ContainerModal>
        <ContainerInfoModal>
          <TitleModal>{text}</TitleModal>
          <PressableButton
            onPress={() => handleIsSearching(false)}>
            <TextButtonModal>Hide Message</TextButtonModal>
          </PressableButton>
        </ContainerInfoModal>
      </ContainerModal>
    </Modal>
  </ContainerGeneralModal>
  )
}


export default ModalAlert