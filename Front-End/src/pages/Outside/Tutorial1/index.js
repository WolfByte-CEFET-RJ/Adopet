import React from 'react';

import BackgroundTutorial from '../../../assets/images/Tutorials/BG1.png';
import Swipe from '../../../assets/images/Tutorials/Dedinho.png'

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ThreePoints from '../../../components/ThreePoints';

import {
  AdopetTitle,
  Background,
  Icon,
  Container,
  ConatinerPoints,
  NextPage,
  ImageBG,
  Skip
} from './styles';

export default function Tutorial1() {

  const navigation= useNavigation();
  function IrparaHome(){
    navigation.navigate('Tutorial2');
  }

  return (
    <Background>

      <ImageBG source={BackgroundTutorial}/>
      <Skip onPress={() => {IrparaHome()}}>Pular</Skip>
      <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
        onPress={() => {navigation.goBack()}}
      />
    <Container>

      <Icon source={Swipe}/>

      <AdopetTitle>Arraste para o lado{'\n'} e selecione os seus{'\n'} pets favoritos</AdopetTitle>

      <ConatinerPoints>
        <ThreePoints
          points={[1,0,0]}
          color={'#12947F'}
          radius={20}
        />
       <NextPage onPress={() => {IrparaHome()}}>Próximo</NextPage>
      </ConatinerPoints>

    </Container>


    </Background>
  );
}