import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

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
  const [token      ,       setToken] = useState('');
  const [userId     ,      setUserId] = useState('');


  const navigation = useNavigation();

  function goPetProfile() {
    if (pets) {
      navigation.navigate('PetProfile', { petSelected, mypet: 0 });
    }
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function loadPets() {
    if (loading)
    setLoading(true);

    const userToken = await AsyncStorage.getItem('token');
    const id    = await AsyncStorage.getItem('id');

    setUserId(id);
    setToken(userToken);

    const response = await api.get('/api/pets/index', {
      // params: {page: petPage},
      headers: {
        'userId': `${id}`,
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

  async function handleRequest() {

    const Ids = {
      id_pet: petSelected.id,
      id_doador: petSelected.id_doador
    }

    try {
      await api.post('/api/pets/requestpet', Ids, {
        headers: {
          'userId': `${userId}`,
          'authorization': `Bearer ${token}`
        }
      })

      NextPet();
    }
    catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }

  }

  useEffect(() => {loadPets()}, [])

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
            <View style={{height: 450, width: 300}}/>
          }
          <ButtonArea>
            <Next onPress={NextPet} activeOpacity={0.8}>
              <Feather name={'x'} size={35} color={'#FF0000'}/>
            </Next>
            <Adopt onPress={handleRequest} activeOpacity={0.8}>
              <Feather name={'heart'} size={35} color={'#00FF00'}/>
            </Adopt>
          </ButtonArea>
        </Body>

      </Container>
    </Background>
  )
}