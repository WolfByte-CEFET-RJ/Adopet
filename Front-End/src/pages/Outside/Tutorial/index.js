import React from 'react';

import BG1 from '../../../assets/images/Tutorials/BG1.png';
import BG2 from '../../../assets/images/Tutorials/bgTutorial2.png';
import BG3 from '../../../assets/images/Tutorials/bgTutorial3.jpg';

import Img1 from '../../../assets/images/Tutorials/Dedinho.png';
import Img2 from '../../../assets/images/Tutorials/chatTutorial2.png';
import Img3 from '../../../assets/images/Tutorials/catTutorial3.png';

import { useNavigation } from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import ThreePoints from '../../../components/ThreePoints';

import {
  AdopetTitle,
  Body,
  Container,
  Content,
  Icon,
  ConatinerPoints,
  NextPage,
  ImageBG,
  Skip,
} from './styles';

export default function Tutorial() {

  const navigation= useNavigation();

  function Pular(){
    navigation.navigate('MainTab');
  }

  const tutorialInfo = [
    {
      BG: BG1,
      image: Img1,
      title: 'Arraste para o lado\n e selecione os seus\n pets favoritos',
      point: [1,0,0]
    },
    {
      BG: BG2,
      image: Img2,
      title: 'Converse Com o dono \n para buscar seu \nnovo pet!',
      point: [0,1,0]
    },
    {
      BG: BG3,
      image: Img3,
      title: 'Pronto! Está preparado \n para conhecer o seu \n mais novo amigo?',
      point: [0,0,1]
    }
  ]

  return (
    <Container>
      <Swiper
        showsPagination={false}
      >
        {tutorialInfo.map((info, index) => (
          <Content key={index}>
            <ImageBG source={info.BG}/>
            <Skip onPress={Pular}>Pular</Skip>

            <Body>
              <Icon source={info.image}/>

              <AdopetTitle>{info.title}</AdopetTitle>

              <ConatinerPoints>
                <ThreePoints
                  points={info.point}
                  color={'#12947F'}
                  radius={20}
                />
              <NextPage>{index == 2 ? 'Vamos lá!' : 'Próximo'}</NextPage>
              </ConatinerPoints>
            </Body>
          </Content>
        ))}
      </Swiper>
    </Container>
  );
}