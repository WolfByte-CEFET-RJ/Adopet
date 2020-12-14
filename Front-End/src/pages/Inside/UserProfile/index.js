import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { ScrollView } from 'react-native';

import BG from '../../../assets/images/UserProfile/BG.png';
import UserImageExample from '../../../assets/images/UserProfile/userimage.png';
import Dog from '../../../assets/images/UserProfile/dog.png';
import Cat from '../../../assets/images/UserProfile/Gato.png';

import PetCard  from '../../../components/PetCard';
import UserInfo from '../../../components/UserInfo';

import {
  About,
  AboutArea,
  Background,
  Container,
  Exit,
  PetArea,
  Pets,
  Title,
  Title2,
} from './styles';

export default function UserProfile() {
  const navigate = useNavigation();
  const route = useRoute();
  const user = route.params.userData.data.user;
  const pets = route.params.userData.data.pets;

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return(
    <Background source={BG}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Exit
            name={'chevron-left'}
            size={30}
            color={'#FFFFFF'}
            onPress={() => navigate.goBack()}
          />
          <UserInfo
            name={capitalize(user.fullname)}
            city={user.local}
            uri={user.img_profile}
            reverse={1}
          />
          <AboutArea>
            <Title>SOBRE</Title>
            <About>{`${capitalize(user.about)}.`}</About>
          </AboutArea>
          <Pets>
            <Title2>PETS</Title2>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                pets.map((pet) => (
                  <PetArea key={pet.imagem}>
                    <PetCard
                      uri={pet.imagem.split('"')[1]}
                      name={capitalize(pet.nome)}
                      adopted={pet.adotado}
                    />
                  </PetArea>
                ))
              }
            </ScrollView>
          </Pets>
        </Container>
      </ScrollView>
    </Background>
  );
}
