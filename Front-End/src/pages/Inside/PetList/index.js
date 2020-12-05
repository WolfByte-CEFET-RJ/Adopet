import React from 'react';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import ListBG from '../../../assets/images/ListPets/BgWantAdopt.png'
import AddPet from '../../../assets/images/ListPets/AddPet.png'
import CatImg from '../../../assets/images/ListPets/cat.png'
import AddPetIMG from '../../../assets/images/ListPets/AdicionarPet.png'


import PetCard from '../../../components/PetCard/index';

import { useNavigation } from '@react-navigation/native';
import {ScrollView} from 'react-native'

import {
  Background,
  Container,
  TopContainer,
  TitlePets,
  IconAddPet,
  Div,
  InputArea,
  InputImage,
  InputText,
  AnimalName,
  AnimalBlock,
  AnimalSection,

} from './styled';


export default function WantAdopt() {
  const navigation= useNavigation();

  function goToRegisterPet() {
    console.log('ola')
    navigation.navigate('RegisterPet');
  }


  return(
    <Background source={ListBG}>
      <ScrollView >
        <TopContainer>
          <Div>
            <Feather
            name='chevron-left'
            size={40}
            color='#FFF'
            onPress={() => {navigation.goBack()}}
            />
          </Div>
          
          <TitlePets> Pets </TitlePets>

          <IconAddPet source={AddPet} onPress={goToRegisterPet}/> 
        </TopContainer> 
       
        
        <InputArea>
          <InputImage>
            <AntDesign name="search1" size={30} color="white" />
          </InputImage>

          <InputText
            placeholder="Nome do animal"
            placeholderTextColor="white"
            maxLength={30}
          />
        
        </InputArea>
    

        <AnimalSection>
          
          <PetCard image={AddPetIMG} onPress={goToRegisterPet}/>
          <PetCard image={CatImg} name="Garfield" />
          <PetCard image={CatImg} name="Garfield" />
          <PetCard image={CatImg} name="Garfield" />
          <PetCard image={CatImg} name="Garfield" />
          <PetCard image={CatImg} name="Garfield" />
          <PetCard image={CatImg} name="Garfield" />



        </AnimalSection>

    </ScrollView>
    </Background>
  )

}