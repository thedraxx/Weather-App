import React from 'react';
import { Container } from './style'
import Search from '../../components/UI/Search/Search'
import ModalAlert from '../../components/UI/alert/ModalAlert';

const SearchLocation = () => {
  return (
    <Container>
      <ModalAlert
        text={"Weather Added"}
      />
      <Search />
    </Container>
  )
}

export default SearchLocation




