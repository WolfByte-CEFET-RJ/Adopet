import React, { useState } from 'react';

import api from '../../../services/api';

import BG from '../../../assets/images/PasswordRecover/BG.png';
import CatPassword from '../../../assets/images/PasswordRecover/CatPassword.png';

import Button from '../../../components/Button';
import Info   from '../../../components//Info';

import {
  Background,
  BodyText,
  Container,
  Forms,
  Header,
  Icon,
  Title,
  Subtitle,
} from './styles';

export default function PasswordRecover(props){

  const [password, setPassword] = useState('');

  async function handlePassword() {

    if (!password) {
      alert('Por favor, digite seu Senha.');
      return
    }

    try {
      await api.post('/api/forgetpassword', {password})
      console.log('Alteração de Senha feita.')
      props.fechar();

    } catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return(
    <Background source={BG}>
      <Container>

        <Header>

          <Title>Esqueceu a</Title>
          <Subtitle>Senha?</Subtitle>

        </Header>

        <Icon source={CatPassword}/>

        <BodyText>Insira o seu E-mail no campo abaixo {'\n'} para receber uma nova senha e as {'\n'} instruções para poder trocar.</BodyText>

        <Forms>

          <Info
            image='mail'
            placeholder='Digite o sua Nova Senha'
            onChangeText={password => setPassword(password)}
            length={30}
            color='#F17808'
          />

          <Info
            image='mail'
            placeholder='Confirme sua Nova Senha'
            onChangeText={password => setPassword(password)}
            length={30}
            color='#F17808'
          />

        </Forms>

        <Button
          onPress={handlePassword}
          text='Enviar'
          colors={['#F17808','#F17808']}
          height={50}
          width={300}
          radius={10}
        />

      </Container>
    </Background>
  );
}