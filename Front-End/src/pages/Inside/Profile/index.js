import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import api               from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView }    from 'react-native';

import BG                from '../../../assets/images/Profile/ProfileBG.png';
import UserImageExample  from '../../../assets/images/Profile/user.png';
import Icon1             from '../../../assets/images/Profile/icon1.png';
import Icon2             from '../../../assets/images/Profile/icon2.png';

import OptionButton      from '../../../components/OptionButton';
import UserInfo          from '../../../components/UserInfo';

import {
  About,
  AboutArea,
  Background,
  Container,
  Options,
  Title,
} from './styles';

export default function Profile() {

  const [pets, setPets] = useState(0);
  const [petsLength, setPetsLength] = useState(0);
  const [user, setUser] = useState({fullname: '', img_profile: '', about: '', local: ''});

  const navigation = useNavigation();

  function goToConfig() {
    navigation.navigate('Config', { user });
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function loadUser() {

    const userToken = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('id');

    const response = await api.get('api/user/profile', {
      headers: {
        'userId': `${userId}`,
        'authorization': `Bearer ${userToken}`
      }
    })
    setPetsLength(response.data.pets.length)
    setPets(response.data.pets)
    setUser(response.data.user)
  }

  function PetList(){
    if(petsLength==0) {
      navigation.navigate('AddPet');
    } else
      navigation.navigate('PetList', {pets});
  }

  useEffect(() => { loadUser() }, [])

  return(
    <Background source={BG}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <UserInfo
            name={user.fullname}
            city={user.local}
            image={{uri: `https://drive.google.com/thumbnail?id=${user.img_profile}`}}
          />

          <AboutArea>
            <Title>SOBRE</Title>
            <About>{capitalize(user.about)}.</About>
          </AboutArea>

          <Options>
            <OptionButton
              background={'#F17808'}
              image={Icon1}
              name={'Pets'}
              onPress ={PetList}
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
