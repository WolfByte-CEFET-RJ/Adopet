import React, { useState } from 'react';

import api from '../../services/api';

import { Modal } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Button from '../Button';
import Info   from '../Info';

import {
  Body,
  BodyText,
  ClickView,
  Container,
  ContainerModal,
  Exit,
  Title,
  TitleStrong,
} from './styles';

export default function ForgetPassword(props){

  const [email, setEmail] = useState('');

  async function handlePassword() {

    if (!email) {
      alert('Por favor, digite seu e-mail.');
      return
    }

    try {
      await api.post('/api/user/forgetpassword', {email})
      console.log('Alteração de senha enviada, verifique seu e-mail.')
      props.fechar();

    } catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return(
    <Modal transparent={true} animationType='fade' visible={props.visible}>
        <Container >
          <ClickView onPress={props.fechar} activeOpacity={1}/>
          <ContainerModal>

            <Exit>
              <Feather
                name='x'
                size={30}
                color='#A1A1A1'
                onPress={props.fechar}
              />
            </Exit>

            <Title>Esqueceu a</Title>
            <TitleStrong>Senha?</TitleStrong>

            <Body>

              <BodyText>Insira o seu E-mail no campo {'\n'} abaixo para receber uma nova {'\n'} senha e as instruções para poder {'\n'} trocar!</BodyText>

              <Info
                image='mail'
                placeholder='Digite o seu E-mail'
                onChangeText={email => setEmail(email)}
                length={30}
                color='#F17808'
              />

              <Button
                onPress={handlePassword}
                text='Enviar'
                colors={['#12947F','#0AB599']}
                height={40}
                width={310}
              />

            </Body>
          </ContainerModal>
        </Container>
      </Modal>
  );
}