import React, { useEffect, useState } from 'react';

import BG from '../../../assets/images/Chat/BG.png'

import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import PetCard from '../../../components/PetCard';
import Search from '../../../components/Search';

import Icon from '../../../assets/images/Add/AdopetTitle.png';
import Dog from '../../../assets/images/UserProfile/dog.png';
import Cat from '../../../assets/images/UserProfile/Gato.png';
import Bird from '../../../assets/images/WantAdopt/Bird.png';
import Duck from '../../../assets/images/WantAdopt/Pato.png';

import {
  Adopt,
  Background,
  BottomAdopt,
  BottomDonate,
  Body,
  Container,
  Donate,
  Header,
  HeaderTitle,
  ListView,
  Message,
  PetArea,
  Title,
  PetsName,
} from './styles';

export default function Chat() {

  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');

  const [visiblePets, setVisiblePets] = useState([]);

  const navigation = useNavigation();

  function goTo(isOng){
    navigation.navigate('RegisterOng', { isOng });
  }

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
    <Background source={BG}>
      <Container>
        <Header>
            <Title source={Icon}></Title>
          <HeaderTitle>
            <BottomAdopt>
              <Adopt>Quero Adotar</Adopt>
            </BottomAdopt>
            <BottomDonate>
              <Donate onPress={() => {navigation.goBack()}}>Quero Doar</Donate>
            </BottomDonate>
          </HeaderTitle>

          <ListView>
            <Message>Mensagem</Message>

            <Search
              onChangeText={name => setName(name)}
              itens={pets}
              item={name}
              function={setVisiblePets}
              little={true}
            />
          </ListView>

        </Header>
        <PetsName>
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
        </PetsName>
      </Container>
    </Background>
  )
}