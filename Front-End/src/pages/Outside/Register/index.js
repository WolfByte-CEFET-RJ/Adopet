import React from 'react';
import { Text } from 'react-native';

import BG from '../../../assets/images/Register/BG.png';

import Header from '../../../components/Header';
import Button from '../../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
  Back,
  Background,
  Container,
  Buttons,
  TextInicial,
} from './styles';

export default function Register(){

  const navigation= useNavigation();
  function IrparaPerson(){
    navigation.navigate('RegisterPerson');
  }
  function IrparaRegister(isOng){
    navigation.navigate('RegisterOng', { isOng });
  }

  return (
    <Background source={BG}>

      <Container>

        <Back>

          <Feather
            name='chevron-left'
            size={30}
            color='#A1A1A1'
            onPress={() => {navigation.goBack()}}
          />

        </Back>

        <TextInicial>

          <Header
            title={'Bem-Vindo ao'}
            strong={'Adopet'}
            description={'Siga 3 passos e você ter acesso ao\nmelhor aplicativo de adoção e\ndoação de pets do Brasil.\n\nAproveite!'}
          />

        </TextInicial>

        <Buttons>
          <Button
            onPress={() => {IrparaRegister(false)}}
            height={55}
            width={325}
            text='Pessoa Física'
            colors={['#12947F','#0AB599']}
            radius={10}
          />

          <Text>OU</Text>

          <Button
            onPress={() => {IrparaRegister(true)}}
            height={55}
            width={325}
            text='Ong'
            colors={['#F17808','#FF8A00']}
            radius={10}
          />
        </Buttons>

      </Container>

    </Background>
  )
}