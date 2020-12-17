import React from 'react';

import { useNavigation } from '@react-navigation/native';

import BG from '../../../assets/images/Config/BG.png';
import Team from '../../../assets/images/AboutUs/Team.png';

import { Feather } from '@expo/vector-icons';

import {
  AdopetTeam,
  Background,
  Back,
  Body,
  Container,
  ImageView,
  Line,
  Options,
  Option,
  OptionText,
  Text,
  Version,
} from './styles';

export default function AboutUs() {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Background source={BG}>
      <Container>
        <Back>
          <Feather
            name='chevron-left'
            size={30}
            color='#FFFF'
            onPress={() => {navigation.goBack()}}
          />
        </Back>

        <Body>
          <Options>
            <Option activeOpacity={0.8}>
              <Line/>
              <OptionText>Sobre Nós</OptionText>
            </Option>
          </Options>
          <ImageView>
            <AdopetTeam source={Team}/>
            <Text>Lorem ipsum dolor sit amet, {'\n'} consectetur adipiscing elit. In {'\n'} commodo pharetra netus non {'\n'} purus tempor ac ultricies.</Text>
          </ImageView>
        </Body>

        <Version>Versão 1.0</Version>

      </Container>
    </Background>
  );
}