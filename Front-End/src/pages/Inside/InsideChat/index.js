import React, { useState, useRef } from 'react';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import BG from '../../../assets/images/ChatInside/BG.png';
import ProfilePic from '../../../assets/images/ChatInside/Profile.png';
import Pata from '../../../assets/images/ChatInside/pata.png';
import Denuncia from '../../../assets/images/ChatInside/Denuncia.png';

import MessageBox from '../../../components/MessageBox';
import { useNavigation } from '@react-navigation/native';
import {ScrollView} from 'react-native';

import {
  Background,
  Body,
  BottomDenun,
  Buttom,
  Chat,
  Container,
  DenunciaImg,
  Header,
  HeaderTitle,
  InputArea,
  InputButton,
  InputImage,
  InputText,
  MessageArea,
  PataImage,
  Person,
  Profile,
  ProfileName,
} from './styled';

export default function InsideChat() {
  const navigation= useNavigation();

  const scrollViewRef = useRef();

  const[timeMessage, setTimeMessage] = useState('Agora');

  function goToRegisterPet() {
    navigation.navigate('RegisterPet');
  }

  return(
    <Background source={BG}>
      <Container>

        <Header>
          <HeaderTitle>
            <Feather
              name='chevron-left'
              size={33}
              color='#A1A1A1'
              onPress={() => {navigation.goBack()}}
            />
            <Person>
              <Profile source={ProfilePic}></Profile>
              <ProfileName> Nicholas </ProfileName>
            </Person>
          </HeaderTitle>
          <BottomDenun>
            <DenunciaImg source={Denuncia}></DenunciaImg>
          </BottomDenun>
        </Header>

        <Body>

          <Chat>
            <MessageArea>
              <ScrollView ref={scrollViewRef}
              onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
                <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
                <MessageBox background={'#F38F32'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              </ScrollView>
            </MessageArea>
          </Chat>

          <InputArea>
            <InputImage>
            <MaterialCommunityIcons name="cat" size={40} color="black" />
            </InputImage>
            <InputText
              placeholder="Escreva aqui.."
              maxLength={30}
            />
            <InputButton>
                <Buttom>
                  <PataImage source={Pata}></PataImage>
                </Buttom>
            </InputButton>
          </InputArea>

        </Body>

      </Container>
    </Background>
  )
}