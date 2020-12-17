import React from 'react';

import BG from '../../../assets/images/AddPet/BG.png';
import IconAdopet from '../../../assets/images/Add/AdopetTitle.png';
import Add from '../../../assets/images/ListPets/AddPet.png';

import Header from '../../../components/Header';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
  AddButton,
  Back,
  Background,
  Button,
  Container,
  HeaderIcon,
  Icon,
  TextInicial,
} from './styles';

export default function AddPet(){

  const navigation = useNavigation();

  function goToRegisterPet(){
    navigation.navigate('RegisterPet');
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

        <HeaderIcon>
          <Icon source={IconAdopet}/>
        </HeaderIcon>

        <TextInicial>
          <Header
            title={'Bem-Vindo à'}
            strong={'Tela de Doação'}
            description={'Para adicionar seu primeiro Pet\npara doação,clique no botão\nabaixo e siga as instruções para\naprender a doar.'}
            white={true}
          />
        </TextInicial>

        <Button activeOpacity={0.9} onPress={goToRegisterPet}>
          <AddButton source={Add}/>
        </Button>

      </Container>

    </Background>
  )
}