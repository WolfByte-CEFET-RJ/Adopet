import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import BG from '../../../assets/images/PasswordRecover/BG.png';
import CatPassword from '../../../assets/images/PasswordRecover/CatPassword.png';

import { ScrollView } from 'react-native';

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

export default function PasswordRecover(){
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEqual, setIsEqual] = useState();

  useEffect(() => {
    if (!password) {
      setIsEqual(false)
      return
    }
    setIsEqual(password == confirmPassword)
  }, [password, confirmPassword])

  async function handlePassword() {

    if (!password || !confirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return
    }

    if (!isEqual) {
      alert('As senhas não são iguais.');
      return
    }

    try {
      await api.post('', {password})
      console.log('Alteração de Senha feita.')

    } catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return(
    <ScrollView >
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
              image='lock'
              placeholder='Digite o sua Nova Senha'
              onChangeText={password => setPassword(password)}
              length={20}
              color='#F17808'
              password={1}
            />

            <Info
              image={isEqual ? 'check' : 'x'}
              placeholder='Confirme sua Nova Senha'
              onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
              length={20}
              color={isEqual ? '#12947F' : '#FF0000'}
              password={1}
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
    </ScrollView>
  );
}