import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title isRed={false}>LOGIN</Title>
      <small>Teste</small>
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </Container>
  );
}
