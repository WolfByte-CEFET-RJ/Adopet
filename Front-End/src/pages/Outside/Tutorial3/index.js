import React from 'react';

import BackgroundTutorial from '../../../assets/images/Tutorials/bgTutorial3.jpg';
import CatImg from '../../../assets/images/Tutorials/catTutorial3.png'

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

export default function Tutorial2() {

  const navigation= useNavigation();
  function IrparaHome(){
    navigation.navigate('MainTab');
  }

  return (
    <Background>

      <ImageBG source={BackgroundTutorial}/>
      <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
        onPress={() => {navigation.goBack()}}
      />
    <Container>

      <Icon source={CatImg}/>

      <AdopetTitle>Pronto! Está preparado {`\n`} para conhecer o seu {`\n`} mais novo amigo?</AdopetTitle>

      <ConatinerPoints>
        <ThreePoints
          points={[0,0,1]}
          color={'#12947F'}
          radius={20}
        />
       <NextPage onPress={() => {IrparaHome()}}>Vamos Lá!</NextPage>
      </ConatinerPoints>

    </Container>


    </Background>
  );
}