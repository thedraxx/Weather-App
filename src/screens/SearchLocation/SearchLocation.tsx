import React from 'react';
import { Container } from './style'
import Search from '../../components/UI/Search/Search'
import ModalAlert from '../../components/UI/alert/ModalAlert';

const SearchLocation = () => {
  return (
    <Container>
      <ModalAlert />
      <Search />
    </Container>
  )
}

export default SearchLocation




