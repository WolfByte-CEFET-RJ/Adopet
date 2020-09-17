import React from 'react';

import PatasTransparentes from '../../../assets/images/Tutorials/PatasTransparentes.png';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import ThreePoints from '../../../components/ThreePoints';

import {
  AdopetTitle,
  Background,
  Button1,
  Description,
  Icon,
  ImagePatas,
} from './styles';

export default function Tutorial3() {

  const navigation= useNavigation();
  function IrparaHome(){
    navigation.navigate('MainTab');
  }

  return (
    <Background>

      <ImagePatas source={PatasTransparentes}/>

      <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
        onPress={() => {navigation.goBack()}}
      />

      <AdopetTitle>Chegou sua Hora!</AdopetTitle>

      <Icon/>

      <Button1>
        <Button
        onPress={() => {IrparaHome()}}
        height={50}
        width={300}
        text='Vamos!'
        colors={['#F17808','#FF8A00']}
        />
      </Button1>

      <ThreePoints
        points={[0,0,1]}
        color={'#F17808'}
      />

    </Background>
  );
}