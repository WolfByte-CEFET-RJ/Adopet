import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import IHomeBG from '../../../assets/images/IHome/IHomeBG.png';

import {
  Adopt,
  Background,
  Body,
  ButtonArea,
  Container,
  Info,
  Next,
  Pet,
  PetImage,
  PetInfo,
  PetName,
  TextClick,
} from './styles';

export default function IHome() {

  const [pets       ,        setPets] = useState([]);
  const [petSelected, setPetSelected] = useState({nome: '', idade: '', localização: '', imagem: ''});
  const [loading    ,     setLoading] = useState(false);
  const [count      ,       setCount] = useState(0);
  const [petPage    ,     setPetPage] = useState(1);

  const navigation = useNavigation();

  function goPetProfile() {
    if (pets) {
      navigation.navigate('PetProfile', { petSelected, interest: 0 });
    }
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function loadPets() {
    if (loading) return;
    setLoading(true);

    const userToken = await AsyncStorage.getItem('token');
    const userId    = await AsyncStorage.getItem('id');

    const response = await api.get('/api/pets/index', {
      // params: {page: petPage},
      headers: {
        'userId': `${userId}`,
        'authorization': `Bearer ${userToken}`
      }
    })

    setPetPage(petPage + 1);

    setPets(response.data);
    setPetSelected(response.data[0]);
    setCount(0);
    setLoading(false);
  }

  function NextPet() {
    if (pets.length != count + 1) {
      setPetSelected(pets[count + 1]);
      setCount(count + 1);
    } else {
      loadPets()
    }
  }

  useEffect(loadPets, [])

  return(
    <Background source={IHomeBG}>
      <Container>
        <Body>
          {
            pets.length ?
            <Pet onPress={goPetProfile} activeOpacity={1}>
              <PetImage source={{uri: `https://drive.google.com/thumbnail?id=${petSelected.imagem.split('"')[1]}`}} resizeMode="cover" />
              <Info >
                <PetName>{capitalize(petSelected.nome)}</PetName>
                <PetInfo>{`${petSelected.idade} anos`}</PetInfo>
                <TextClick>Clique na foto para mais informações!</TextClick>
              </Info>
            </Pet> :
            <></>
          }
          <ButtonArea>
            <Next onPress={NextPet} activeOpacity={0.8}>
              <Feather name={'x'} size={35} color={'#FF0000'}/>
            </Next>
            <Adopt activeOpacity={0.8}>
              <Feather name={'heart'} size={35} color={'#00FF00'}/>
            </Adopt>
          </ButtonArea>
        </Body>

      </Container>
    </Background>
  )
}