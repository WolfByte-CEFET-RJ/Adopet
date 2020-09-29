import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

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
  Tag,
  TagArea,
  Tags,
  TagText,
  Title,
  UserArea,
} from './styles';

export default function PetProfile() {
  const data = [{key:'1', title: 'TIPO DE ANIMAL', text: 'CACHORRO'},
                {key:'2', title: 'IDADE', text: '2 ANOS'},
                {key:'3', title: 'SEXO', text: 'FEMEA'},
                {key:'4', title: 'TAMANHO/PESO', text: '56 CM E 30 KG'},
                {key:'5', title: 'VACINAS', text: '-'},
                {key:'6', title: 'TREINADO', text: 'SIM'},
                {key:'7', title: 'CASTRADO', text: 'SIM'},
                {key:'8', title: 'VERMIFUGADO', text: 'NÃO'},
                {key:'9', title: 'CHIPADO', text: 'NÃO'}]

  const [favorite, setFavorite] = useState(false);

  const navigation = useNavigation();

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
                <PetName>Polenta</PetName>
                <PetInfo>2 anos, Rio de Janeiro, Brasil</PetInfo>
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
              <AboutText>Sou uma cadela muito alegre e feliz.</AboutText>
            </AboutArea>

            <TagArea>
              <Title>CARACTERISTICAS DO PET</Title>
              <Tags horizontal={true} showsHorizontalScrollIndicator={false}>
                {Array.apply(0, Array(3)).map((_, k) => (
                  <>
                    <PetTag key={k} tag={'docil'}/>
                    <PetTag tag={'amigavel'}/>
                    <PetTag tag={'brincalhao'}/>
                  </>
                ))}

              </Tags>
            </TagArea>

            <FeaturesArea>
              <Title>CARACTERISTICAS ADICIONAIS</Title>
              <PetGrid data={data}/>
            </FeaturesArea>

            <UserArea>
              <Title>SOBRE O DONO</Title>
              <UserCard
                onPress={() => navigation.navigate('UserProfile')}
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
