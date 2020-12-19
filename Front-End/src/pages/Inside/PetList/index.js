import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import ListBG from '../../../assets/images/ListPets/BgWantAdopt.png'
import AddPet from '../../../assets/images/ListPets/AddPet.png'
import AddPetIMG from '../../../assets/images/ListPets/AdicionarPet.png'

import PetCard from '../../../components/PetCard/index';

import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native'

import {
  AnimalList,
  Background,
  Div,
  IconAddPet,
  InputArea,
  InputImage,
  InputText,
  PetArea,
  PetAreaHeader,
  PetSection,
  TopContainer,
  TitlePets,
} from './styled';

export default function WantAdopt() {

  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');
  const [visiblePets, setVisiblePets] = useState([]);
  const [petInfo, setPetInfo] = useState([]);
  const [firstPet, setFirstPet] = useState({imagem: '', nome: '', adotado: ''});

  const route = useRoute();
  const navigation = useNavigation();
  function goToRegisterPet() {
    navigation.navigate('RegisterPet', { data: 0});
  }

  function goToPetProfile() {
    const petSelected = petInfo[0];
    navigation.navigate('PetProfile', { petSelected, mypet: 1 });
  }

  useEffect(() => {
    setFirstPet(route.params.pets[0]);
    setPets(route.params.pets);
    setVisiblePets(route.params.pets.shift());
  }, []);

  useEffect(() => {
    if (!name) {
      setVisiblePets(pets.shift());
      return;
    };

    const findName = pets.filter((item) => item.name.toLowerCase().indexOf(name.toLowerCase()) != -1);
    setVisiblePets(findName)

  }, [name])

  async function loadPets() {

    const userToken = await AsyncStorage.getItem('token');
    const id    = await AsyncStorage.getItem('id');

    const response = await api.get('/api/pets/index', {
      headers: {
        'userId': `${id}`,
        'authorization': `Bearer ${userToken}`
      }
    })

    setPetInfo(response.data);
  }

  useEffect(() => { loadPets() }, []);

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
            placeholder="Nome"
            placeholderTextColor="white"
            maxLength={30}
            onPress={() => setName(name)}
          />
        </InputArea>

        <PetSection>
          <PetAreaHeader>
            <PetArea>
              <PetCard image={AddPetIMG} onPress={goToRegisterPet}/>
            </PetArea>
            <PetArea>
              <PetCard
                uri={firstPet.imagem.split('"')[1]}
                name={firstPet.nome}
                adopted={firstPet.adotado}
                onPress={goToPetProfile}
              />
            </PetArea>
          </PetAreaHeader>

          <AnimalList
            data={pets}
            keyExtractor={( _, index) => String(index)}
            numColumns={2}
            renderItem={ ({item}) => (
              <PetArea>
                <PetCard
                  uri={item.imagem.split('"')[1]}
                  name={item.nome}
                  adopted={item.adotado}
                />
              </PetArea>
            )}
          />
        </PetSection>
      </ScrollView>
    </Background>
  )
}
