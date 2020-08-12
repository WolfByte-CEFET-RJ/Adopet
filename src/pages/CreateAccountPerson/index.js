import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import BG from '../../assets/images/BG.png';

import {
  CheckBox,
  ScrollView,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import Info from '../../components/Info';

import {
  BackGround,
  BtCreate,
  BtCreateText,
  CheckBoxContainer,
  CheckBoxText,
  CheckBoxes,
  Container,
  Footer,
  Header,
  HeaderTitle,
  Orange,
  Page,
  Person,
  PersonText,
  PlaceImage,
  PlaceImageOpacity,
  Points
} from './styles';


export default function CreateAccountPerson() {
  const [check1Select, setCheck1Select] = useState(false);
  const [check2Select, setCheck2Select] = useState(false);


  return (
    <ScrollView>

  <Text>Is CheckBox1 selected: {check1Select ? "👍" : "👎"}</Text>
  <Text>Is CheckBox2 selected: {check2Select ? "👍" : "👎"}</Text>

    <Container>

      <BackGround source={BG}/>

      <Feather
        name='chevron-left'
        size={26}
        color='#A1A1A1'
      />

      <Header>
        <HeaderTitle>Crie sua conta{'\n'}no Adopet</HeaderTitle>
        <Person>
          <Text>Este cadastro se refere a </Text>
          <PersonText>Pessoa Física.</PersonText>
        </Person>
      </Header>

      <PlaceImage>
        <PlaceImageOpacity
          onPress={() => {}}
        >
          <Feather name='camera' color='#F17808' size={30}/>
        </PlaceImageOpacity>
      </PlaceImage>

      <View>
        <Info
          text='Usuário'
          image='user'
          placeholder='Digite seu nome'
        />
        <Info
          text='E-mail'
          image='mail'
          placeholder='Digite seu E-mail'
        />
        <Info
          text='Senha'
          image='lock'
          placeholder='Digite sua senha'
          password={1}
        />
        <Info
          text='CPF'
          image='users'
          placeholder='Digite seu CPF'
        />
      </View>

      <Footer>
        <CheckBoxes>
          <CheckBoxContainer>
            <CheckBox
              value={check1Select}
              onValueChange={setCheck1Select}
            />
            <View>
              <Text>Ao clicar em Cadastre-se, você concorda com </Text>
                <CheckBoxText>
                  <Text>nossos</Text>
                  <Orange>Termos</Orange>
                  <Text> e </Text>
                  <Orange>Política de Dados.</Orange>
                </CheckBoxText>
            </View>
          </CheckBoxContainer>

          <CheckBoxContainer>
            <CheckBox
              value={check2Select}
              onValueChange={setCheck2Select}
            />
            <Text>I accept the terms and privacy policy</Text>
          </CheckBoxContainer>
        </CheckBoxes>

        <LinearGradient
            colors={['#12947F','#0AB599']}
            style={{height: 50, width: '90%',
                    borderRadius: 5}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
          <BtCreate>
            <BtCreateText>Criar Minha Conta</BtCreateText>
          </BtCreate>

        </LinearGradient>

      </Footer>
    </Container>

    <Page>
      <Points>
        <Feather name='square' size={10} color='#F17808' />
        <Feather name='square' size={10} color='#F17808' />
        <Feather name='square' size={10} color='#F17808' />
      </Points>
    </Page>

    </ScrollView>
  )
}
