import React, {useContext} from 'react';
import {Modal} from 'react-native';
import { ContainerGeneralModal, ContainerInfoModal, ContainerModal, PressableButton, TextButtonModal, TitleModal } from './style';
import { CitiesWeatherContext } from '../../context/CitiesWeather';

interface Props {
  text:string
}


const ModalAlertCityRemoved = ({text}:Props) => {
  const {handleIsDeleting,isDeleting} = useContext(CitiesWeatherContext)


  return (
    <ContainerGeneralModal>
    <Modal
      animationType="slide"
      transparent={true}
      visible={isDeleting}>
      <ContainerModal>
        <ContainerInfoModal>
          <TitleModal>{text}</TitleModal>
          <PressableButton
            onPress={() => handleIsDeleting(false)}>
            <TextButtonModal>Hide Message</TextButtonModal>
          </PressableButton>
        </ContainerInfoModal>
      </ContainerModal>
    </Modal>
  </ContainerGeneralModal>
  )
}


export default ModalAlertCityRemoved