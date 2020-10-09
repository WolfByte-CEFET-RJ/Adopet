import React, { useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { ScrollView, View } from 'react-native';

import Swiper from 'react-native-swiper';

import { FontAwesome } from '@expo/vector-icons';

import ProfileBG from '../../../assets/images/Profile/ProfileBG.png'

import PetImage from '../../../assets/images/PetProfile/pet_example.png';
import PetImage2 from '../../../assets/images/PetProfile/pet_example2.png';
import PetImage3 from '../../../assets/images/PetProfile/pet_example3.png';
import UserImageExample from '../../../assets/images/PetProfile/user_example.png';

import Buttom from '../../../components/Button';
import UserCard from '../../../components/UserCard';
import PetGrid from '../../../components/PetGrid';
import PetTag from '../../../components/PetTag';

import {
  AboutArea,
  AboutText,
  Background,
  Body,
  ButtonView,
  Container,
  Dots,
  FeaturesArea,
  Footer,
  PetImageArea,
  PetInfo,
  PetInfoArea,
  PetName,
  PetTextArea,
  SwipeImage,
  TagArea,
  Tags,
  Title,
  UserArea,
} from './styles';

export default function PetProfile() {
  const [favorite, setFavorite] = useState(false);

  const navigation = useNavigation();
  const route      = useRoute();
  const data       = route.params.petSelected;
  const userId     = data.id_doador;

  function goToUserProfile() {
    navigation.navigate('UserProfile', { userId })
  }

  const petInfos = [{title: 'TIPO DE ANIMAL', text: data.tipo.toUpperCase()},
                    {title: 'IDADE',          text: `${data.idade} ANOS`},
                    {title: 'SEXO',           text: data.sexo.toUpperCase()},
                    {title: 'TAMANHO/PESO',   text: data.tamanho.toUpperCase()},
                    {title: 'VACINAS',        text: data.vacinação.toUpperCase()},
                    {title: 'TREINADO',       text: data.Treinado ? 'SIM' : 'NÃO'},
                    {title: 'CASTRADO',       text: data.castrado ? 'SIM' : 'NÃO'},
                    {title: 'VERMIFUGADO',    text: data.vermifugado ? 'SIM' : 'NÃO'},
                    {title: 'CHIPADO',        text: data.chipado ? 'SIM' : 'NÃO'}]

  return (
    <Background source={ProfileBG}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <PetImageArea>
            <Swiper
              style={{height: 350}}
              dot={<Dots active={'#000'} />}
              activeDot={<Dots active={'#FFF'} />}
              paginationStyle={{top: null, right: 15, left: null, bottom: 15}}
              autoplay={true}
            >
              <SwipeImage source={PetImage} resizeMode="cover"/>
              <SwipeImage source={PetImage2} resizeMode="cover"/>
              <SwipeImage source={PetImage3} resizeMode="cover"/>
            </Swiper>

            <PetInfoArea>
              <PetTextArea>
                <PetName>{data.nome}</PetName>
                <PetInfo>{`${data.idade} anos, ${data.localização}`}</PetInfo>
              </PetTextArea>
              <FontAwesome
                name={favorite ? 'heart' : 'heart-o'}
                size={50}
                color={favorite ? "#F17808" : "#fff"}
                style={{marginBottom:20}}
                onPress={() => setFavorite(!favorite)}
              />
            </PetInfoArea>

          </PetImageArea>
          <Body>
            <AboutArea>
              <Title>SOBRE</Title>
              <AboutText>{data.caracteristicas}</AboutText>
            </AboutArea>

            <TagArea>
              <Title>CARACTERISTICAS DO PET</Title>
              <Tags horizontal={true} showsHorizontalScrollIndicator={false}>
                <PetTag tag={'docil'}/>
                <PetTag tag={'amigavel'}/>
                <PetTag tag={'brincalhao'}/>
              </Tags>
            </TagArea>

            <FeaturesArea>
              <Title>CARACTERISTICAS ADICIONAIS</Title>
              <PetGrid data={petInfos}/>
            </FeaturesArea>

            <UserArea>
              <Title>SOBRE O DONO</Title>
              <UserCard
                onPress={goToUserProfile}
                image={UserImageExample}
                name={'Eric Merge'}
                text={'Depois de muitos merges na vida acabei vendo que era necessário fazer mais cursos de programação, por isso me vejo sem capacidades de cuidar do meu Pet e estou o doando.'}
              />
            </UserArea>

          </Body>
          <Footer>
           {favorite ?
              <ButtonView>
                <Buttom
                  text='Ir para o Chat'
                  colors={['#12947F','#0AB599']}
                  radius={10}
                />
              </ButtonView>
              :
              <View />
            }

            <Buttom
              text='Ver outros Animais'
              colors={['#F17808','#FF9A00']}
              radius={10}
              onPress={() => navigation.goBack()}
            />
          </Footer>
        </Container>
      </ScrollView>
    </Background>
  );
}