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
  Exit,
  Options,
  Title,
  UserImage,
  UserInfo,
  UserName,
  UserState,
} from './styles';

export default function Profile() {
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

          <UserInfo>
            <UserName>Carlos Alberto</UserName>
            <UserState>Rio de Janeiro</UserState>
            <UserImage source={UserImageExample} resizeMode="cover"/>
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
            />
            <OptionButton
              background={'#FFFFFF'}
              image={Icon2}
              name={'Perfil'}
            />
          </Options>
        </Container>
      </ScrollView>
    </Background>
  );
}
