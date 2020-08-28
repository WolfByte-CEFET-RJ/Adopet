import React,{useState} from 'react';

import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import ColarAfter from '../../assets/images/ColarAfter.png';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';

import {
  AdopetTitle,
  Background,
  Button1,
  Description,
  Icon,
  ImagePatas,
  Page,
  Points,
} from './styles';

const fetchFonts = () => {
    return Font.loadAsync({
      'GilroyBold':require('../../assets/fonts/Gilroy-Bold.ttf'),
    });
  };


export default function AfterCreate1() {
      const [dataLoaded, setDataLoaded] = useState(false);
      if (!dataLoaded){
      return(
         <AppLoading
            startAsync = {fetchFonts}
            onFinish = {()=> setDataLoaded(true)}
          />
       );
      }
      const navigation= useNavigation();
      function AfterCreate2(){
        navigation.navigate('AfterCreate2');
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

      <AdopetTitle style={{fontFamily:'GilroyBold'}}>Estamos quase lá!
      </AdopetTitle>

      <Description>Verifique o e-mail de confirmação{"\n"}da sua conta e venha encontrar o {"\n"}seu pet!</Description>

      <Icon source={ColarAfter}/>


      <Button1>
        <Button
        onPress={() => {AfterCreate2()}}
        height={50}
        width={300}
        text='Continuar'
        colors={['#F17808','#FF8A00']}
        />
      </Button1>

      <Page>
        <Points>
          <Feather name='square' size={10} color='#12947F' />
          <Feather name='square' size={10} color='#12947F' />
          <Feather name='square' size={10} color='#12947F' />
        </Points>
      </Page>


    </Background>
  );
}