import React, { useEffect, useState } from 'react';

import BG from '../../../assets/images/Chat/BG.png'

import { useNavigation } from '@react-navigation/native';

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
  Title
} from './styles';

export default function Chat() {

  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');

  const [visiblePets, setVisiblePets] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const names = [
      {name:'Polenta',          image: Dog,  adopted: 0},
      {name:'Duck Tales',       image: Duck, adopted: 0},
      {name:'Garfield',         image: Cat,  adopted: 1},
      {name:'Festa em Ipanema', image: Bird, adopted: 0},
    ]

    setVisiblePets(names);
    setPets(names);
  }, [])

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
              <Donate>Quero Doar</Donate>
            </BottomDonate>
          </HeaderTitle>

          <ListView>
            <Message>Mensagem</Message>

            <Search
              onChangeText={name => setName(name)}
              itens={pets}
              item={name}
              function={setVisiblePets}
            />
          </ListView>

        </Header>

        <Body
          data={visiblePets}
          keyExtractor={( _, index) => String(index)}
          renderItem={ ({item, index}) => (
            <PetArea index={index}>
              <PetCard
                image={item.image}
                adopted={item.adopted}
              />
            </PetArea>
          )}
        />
      </Container>
    </Background>
  )
}