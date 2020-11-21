import React from 'react';

import { useNavigation } from '@react-navigation/native';

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
            name={'Carlos Alberto'}
            city={'Rio de Janeiro'}
            image={UserImageExample}
            reverse={1}
          />
          <AboutArea>
            <Title>SOBRE</Title>
            <About>Recentemente tive que me mudar para uma casa menor e estou tendo que doar meus pets.</About>
          </AboutArea>
          <Pets>
            <Title2>PETS</Title2>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PetArea>
                <PetCard image={Dog} name={'Polenta'}/>
              </PetArea>
              <PetArea>
                <PetCard image={Cat} name={'Garfield'} adopted={1}/>
              </PetArea>
              <PetArea>
                <PetCard image={Dog} name={'Polenta'}/>
              </PetArea>
              <PetArea>
                <PetCard image={Cat} name={'Garfield'}/>
              </PetArea>
            </ScrollView>
          </Pets>
        </Container>
      </ScrollView>
    </Background>
  );
}
