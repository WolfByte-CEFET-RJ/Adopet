import React,{useState} from 'react';
import { Text } from 'react-native';
import Button from '../../components/Button';
import BGInicial from '../../assets/images/Inicial/BGInicial.png';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import { useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
  Background,
  Container,
  Header,
  AdopetTitle,
  Description,
  Buttons,
  TextInicial,
} from './styles';

const fetchFonts = () => {
  return Font.loadAsync({
    'GilroyLight': require('../../assets/fonts/Gilroy-Light.ttf'),
    'GilroyBold':require('../../assets/fonts/Gilroy-Bold.ttf'),
  });
};

export default function Inicial(){
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
  function IrparaPerson(){
    navigation.navigate('CreateAccountPerson');
  }
  function IrparaOng(){
    navigation.navigate('CreateAccountONG')
  }
  return(
    <Background source={BGInicial}>
      <Container>

        <TextInicial>

          <Feather
            name='chevron-left'
            size={26}
            color='#A1A1A1'
            onPress={() => {navigation.goBack()}}
          />

          <Header style={{fontFamily:'GilroyLight'}}>Bem-Vindo ao</Header>
          <AdopetTitle style={{fontFamily:'GilroyBold'}}>Adopet</AdopetTitle>

          <Description>Siga 3 passos e você ter acesso ao {"\n"}melhor aplicativo de adoção e {"\n"}doação de pets do Brasil.{"\n"}{"\n"}Aproveite!</Description>

        </TextInicial>


        <Buttons>
          <Button
            onPress={() => {IrparaPerson()}}
            height={55}
            width={325}
            text='Pessoa Física'
            colors={['#12947F','#0AB599']}
            radius={10}
          />

          <Text>OU</Text>

          <Button
            onPress={() => {IrparaOng()}}
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