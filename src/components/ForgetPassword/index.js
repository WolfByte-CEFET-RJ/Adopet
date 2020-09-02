import React from 'react';

import { Modal } from 'react-native';

import Button from '../Button';
import Info   from '../Info';

import {
  Body,
  BodyText,
  Container,
  ContainerModal,
  Title,
  Subtitle,
} from './styles';

export default function ForgetPassword(props){
  return(
    <Modal transparent={true} animationType='fade' visible={props.visible}>
        <Container>
          <ContainerModal>
            <Title>Esqueceu a</Title>
            <Subtitle>senha?</Subtitle>

            <Body>

              <BodyText>Insira o seu E-mail no campo {'\n'} abaixo para receber uma nova {'\n'} senha e as instruções para poder {'\n'} trocar!</BodyText>

              <Info
                image='mail'
                placeholder='Digite o seu E-mail'
                onChangeText={ () => ''}
                length={30}
                color='#F17808'
              />

              <Button
                onPress={props.fechar}
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