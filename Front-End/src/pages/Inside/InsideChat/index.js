import React, { useState, useRef } from 'react';


import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import BG from '../../../assets/images/ChatInside/BG.png';
import ProfilePic from '../../../assets/images/ChatInside/Profile.png';
import Pata from '../../../assets/images/ChatInside/pata.png' ;
import Denuncia from '../../../assets/images/ChatInside/Denuncia.png';


import MessageBox from '../../../components/MessageBox';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity, ScrollView} from 'react-native';

import {
  Background,
  TopContainer,
  DenunciaImg,
  Div,
  InputArea,
  InputImage,
  InputText,
  Container,
  Profile,
  ProfileName,
  DivFeather,
  InputButton,
  Buttom,
  PataImage,
  DivFlex,
  MessageArea,
  YourMessage,
  MessageDiv,
} from './styled';


export default function InsideChat(props) {
  const navigation= useNavigation();

  const scrollViewRef = useRef();

  const[timeMessage, setTimeMessage] = useState('agora');


  function goToRegisterPet() {
    navigation.navigate('RegisterPet');
  }

  

  return(
    <Background source={BG}>
      <Container>
        <DivFlex>
          <TopContainer>
            <Div>
              <DivFeather>
                <Feather
                  name='chevron-left'
                  size={33}
                  color='#A1A1A1'
                  onPress={() => {navigation.goBack()}}
                />
              </DivFeather>
              
              <Profile source={ProfilePic}></Profile>

              <ProfileName> Nicholas </ProfileName>
            </Div>
        </TopContainer> 
        <TouchableOpacity>
          <DenunciaImg source={Denuncia}></DenunciaImg>
        </TouchableOpacity>
        
        </DivFlex>
        
          <MessageArea>
            <ScrollView ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
              <MessageBox background={'#12947F'} align={'flex-end'} text={'Olá'}/>
              <MessageBox background={'#12947F'} align={'flex-start'} text={'Olá, tudo bem??'}/>
            </ScrollView>
          </MessageArea>
        

        <InputArea>
          <InputImage>
           <MaterialCommunityIcons name="cat" size={40} color="black" />
          </InputImage>

          <InputText
            placeholder="Escreva aqui.."
            maxLength={30}
          />
          
          <InputButton>
            <TouchableOpacity>
              <Buttom>
                <PataImage source={Pata}></PataImage>
              </Buttom> 
            </TouchableOpacity>
          </InputButton>
        </InputArea>

      </Container>
    </Background>
  )

}