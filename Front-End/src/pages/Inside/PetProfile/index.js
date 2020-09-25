import React, { useState } from 'react';

import { ScrollView, FlatList, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Swiper from 'react-native-swiper';

import { FontAwesome } from '@expo/vector-icons';

import ProfileBG from '../../../assets/images/Profile/ProfileBG.png'

import PetImage from '../../../assets/images/PetProfile/pet_example.png';
import PetImage2 from '../../../assets/images/PetProfile/pet_example2.png';
import PetImage3 from '../../../assets/images/PetProfile/pet_example3.png';
import UserImageExample from '../../../assets/images/PetProfile/user_example.png';

import Buttom from '../../../components/Button';

import {
  AboutArea,
  AboutText,
  Background,
  Body,
  ButtonView,
  Container,
  Dots,
  FeaturesArea,
  FeaturesGrid,
  Footer,
  Item,
  ItemText,
  ItemTitle,
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
  UserAbout,
  UserArea,
  UserImage,
  UserName,
  UserText,
  UserTextArea,
} from './styles';

export default function PetProfile() {
  const data = [{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'},{key:'7'},{key:'8'},{key:'9'}]

  const [favorite, setFavorite] = useState(false);

  return (
    <Background source={ProfileBG}>
      <StatusBar backgroundColor={'#ffffffef'}/>
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
                {Array.apply(0, Array(8)).map((_, k) => (
                  <Tag key={k}>
                    <TagText>Dócil</TagText>
                  </Tag>
                ))}
              </Tags>
            </TagArea>
            <FeaturesArea>
              <Title>CARACTERISTICAS ADICIONAIS</Title>
              <FeaturesGrid>
                <FlatList
                  data={data}
                  keyExtractor={Info => String(Info.key)}
                  numColumns={3}
                  renderItem={() => (
                    <Item>
                      <ItemTitle>TESTE</ItemTitle>
                      <ItemText>TextTeste</ItemText>
                    </Item>
                  )}
                />
              </FeaturesGrid>
            </FeaturesArea>

            <UserArea>
              <Title>SOBRE O DONO</Title>
              <UserAbout
                colors={['#F99D47', '#FB7A2D80']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <UserImage source={UserImageExample} resizeMode="cover"/>
                <UserTextArea>
                  <UserName>Eric Merge</UserName>
                  <UserText>Depois de muitos merges na vida acabei vendo que era necessário fazer mais cursos
                    de programação, por isso me vejo sem capacidades de cuidar do meu Pet e estou o doando.
                  </UserText>
                </UserTextArea>
              </UserAbout>
            </UserArea>

          </Body>
          <Footer>
           {favorite ?
              <ButtonView>
                <Buttom
                  text='Ir para o Chat'
                  colors={['#12947F','#0AB599']}
                  onPress={() => {}}
                  radius={10}
                />
              </ButtonView>
              :
              <View />
            }

            <Buttom
              text='Ver outros Animais'
              colors={['#F17808','#FF9A00']}
              onPress={() => {}}
              radius={10}
            />
          </Footer>
        </Container>
      </ScrollView>
    </Background>
  );
}