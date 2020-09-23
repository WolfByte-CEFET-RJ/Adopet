import React from 'react';

import PatasTransparentes from '../../../assets/images/Tutorials/PatasTransparentes.png';
import Coleira from '../../../assets/images/Tutorials/Coleira.png';

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

export default function Tutorial1() {

  const navigation= useNavigation();
  function Tutorial2(){
    navigation.navigate('Tutorial2');
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

      <AdopetTitle>Estamos quase lá!</AdopetTitle>

      <Description>Verifique o e-mail de confirmação{"\n"}da sua conta e venha encontrar o {"\n"}seu pet!</Description>

      <Icon source={Coleira}/>

      <Button1>
        <Button
        onPress={() => {Tutorial2()}}
        height={50}
        width={300}
        text='Continuar'
        colors={['#F17808','#FF8A00']}
        />
      </Button1>

      <ThreePoints
        points={[1,0,0]}
        color={'#F17808'}
        radius={5}
        
      />

    </Background>
  );
}