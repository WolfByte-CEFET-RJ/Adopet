import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import BG from '../../../assets/images/Config/BG.png';

import UserExample from '../../../assets/images/Profile/user.png';

import HeaderConfig from '../../../components/HeaderConfig';

import {
  Background,
  Body,
  Container,
  ExitArea,
  ExitText,
  Options,
  Option,
  OptionText,
  Version,
} from './styles';

export default function Config() {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  function goTo(screen) {
    navigation.navigate(screen);
  }

  return (
    <Background source={BG}>
      <Container>
        <Version>Versão 1.0</Version>
        <HeaderConfig
          name={'Carlos Alberto'}
          city={'Rio de Janeiro'}
          image={UserExample}
          onPress={goBack}
        />

        <Body>
          <Options>
            <Option activeOpacity={0.8} onPress={() => goTo('IHome')}>
              <OptionText>Home</OptionText>
            </Option>
            <Option activeOpacity={0.8}>
              <OptionText>Editar Conta</OptionText>
            </Option>
            <Option activeOpacity={0.8}>
              <OptionText>Configurações</OptionText>
            </Option>
            <Option activeOpacity={0.8} onPress={() => goTo('Tutorial')}>
              <OptionText>Ajuda</OptionText>
            </Option>
            <Option activeOpacity={0.8}>
              <OptionText>FeedBack</OptionText>
            </Option>
            <Option activeOpacity={0.8}>
              <OptionText>Sobre Nós</OptionText>
            </Option>
          </Options>
        </Body>
        <ExitArea activeOpacity={1} onPress={() => goTo('Home')}>
          <Feather name={'power'} size={20} color={'#FFF'}/>
          <ExitText>Sair</ExitText>
        </ExitArea>
      </Container>
    </Background>
  );
}