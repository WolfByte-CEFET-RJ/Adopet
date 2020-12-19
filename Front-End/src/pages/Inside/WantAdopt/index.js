import React, { useEffect, useState } from 'react';

import ListBG from '../../../assets/images/WantAdopt/ListBG.png'

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import PetCard from '../../../components/PetCard';
import Search from '../../../components/Search';

import Dog from '../../../assets/images/UserProfile/dog.png';
import Cat from '../../../assets/images/UserProfile/Gato.png';
import Bird from '../../../assets/images/WantAdopt/Bird.png';
import Duck from '../../../assets/images/WantAdopt/Pato.png';

import {
  Background,
  Body,
  Container,
  Header,
  PetArea,
  Title
} from './styles';

export default function WantAdopt() {

  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');

  const [visiblePets, setVisiblePets] = useState([]);

  const navigation = useNavigation();

  async function loadPets() {

    const userToken = await AsyncStorage.getItem('token');
    const id    = await AsyncStorage.getItem('id');

    // const response = await api.get('/api/pets/myadopts', {
    //   headers: {
    //     'userId': `${id}`,
    //     'authorization': `Bearer ${userToken}`
    //   }
    // })

    setVisiblePets(response.data);
    setPets(response.data);
  }

  useEffect(() => { loadPets() }, [])

  return(
    <Background source={ListBG}>
      <Container>
        <Header>
          <Title>Animais para doação</Title>

          <Search
            onChangeText={name => setName(name)}
            itens={pets}
            item={name}
            function={setVisiblePets}
          />
        </Header>

        <Body
          data={visiblePets}
          keyExtractor={( _, index) => String(index)}
          numColumns={2}
          renderItem={ ({item, index}) => (
            <PetArea index={index}>
              <PetCard
                image={item.image}
                name={item.name}
                adopted={item.adopted}
              />
            </PetArea>
          )}
        />
      </Container>
    </Background>
  )
}