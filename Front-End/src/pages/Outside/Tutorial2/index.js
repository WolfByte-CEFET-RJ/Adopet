import React from 'react';

import BackgroundTutorial from '../../../assets/images/Tutorials/bgTutorial2.png';
import ChatImg from '../../../assets/images/Tutorials/chatTutorial2.png'

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
    navigation.navigate('Tutorial3');
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

      <Icon source={ChatImg}/>

      <AdopetTitle>Converse Com o dono {`\n`} para buscar seu {`\n`}novo pet!</AdopetTitle>

      <ConatinerPoints>
        <ThreePoints
          points={[0,1,0]}
          color={'#12947F'}
          radius={20}
        />  
       <NextPage onPress={() => {IrparaHome()}}>Próximo</NextPage>
      </ConatinerPoints>
      
    </Container>
   

    </Background>
  );
}