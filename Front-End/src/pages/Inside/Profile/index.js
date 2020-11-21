import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native';

import BG from '../../../assets/images/Profile/ProfileBG.png';
import UserImageExample from '../../../assets/images/Profile/user.png';
import Icon1 from '../../../assets/images/Profile/icon1.png';
import Icon2 from '../../../assets/images/Profile/icon2.png';

import OptionButton from '../../../components/OptionButton';

import {
  About,
  AboutArea,
  Background,
  Container,
  ImageArea,
  Options,
  Title,
  UserImage,
  UserInfo,
  UserName,
  UserState,
} from './styles';

export default function Profile() {
  const navigation = useNavigation();

  function goToRegisterPet() {
    navigation.navigate('RegisterPet');
  }

  function goToConfig() {
    navigation.navigate('Config');
  }

  return(
    <Background source={BG}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <UserInfo>
            <UserName>Carlos Alberto</UserName>
            <UserState>Rio de Janeiro</UserState>
            <ImageArea>
              <UserImage source={UserImageExample} resizeMode="cover"/>
            </ImageArea>
          </UserInfo>

          <AboutArea>
            <Title>SOBRE</Title>
            <About>Recentemente tive que me mudar para uma casa menor e estou tendo que doar meus pets.</About>
          </AboutArea>

          <Options>
            <OptionButton
              background={'#F17808'}
              image={Icon1}
              name={'Pets'}
              onPress={goToRegisterPet}
            />
            <OptionButton
              background={'#FFFFFF'}
              image={Icon2}
              name={'Perfil'}
              onPress={goToConfig}
            />
          </Options>
        </Container>
      </ScrollView>
    </Background>
  );
}
