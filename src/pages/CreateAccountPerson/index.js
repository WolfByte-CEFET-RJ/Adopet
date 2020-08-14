import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

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

import Button from '../../components/Button';
import Info from '../../components/Info';

import {
  BackGround,
  CheckBoxContainer,
  CheckBoxText,
  CheckBoxes,
  Container,
  Footer,
  Forms,
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
      <Container>
        <BackGround source={BG} />

        <Text>Is CheckBox1 selected: {check1Select ? "👍" : "👎"}</Text>

        <Feather
          name='chevron-left'
          size={26}
          color='#A1A1A1'
        />

        <Header>
          <HeaderTitle>Crie sua conta{'\n'}no Adopet</HeaderTitle>
          <Person>
            <Text>Este cadastro se refere a </Text>
            <PersonText>{teste}</PersonText>
          </Person>
        </Header>

        <PlaceImage>
          <PlaceImageOpacity
            onPress={() => {}}
          >
            <Feather name='camera' color='#F17808' size={30}/>
          </PlaceImageOpacity>
        </PlaceImage>

        <Forms>
          <Info
            image='user'
            placeholder='Digite seu nome'
          />
          <Info
            image='mail'
            placeholder='Digite seu E-mail'
          />
          <Info
            image='lock'
            placeholder='Digite sua senha'
            password={1}
            length={15}
          />
          <Info
            image='users'
            placeholder='Digite seu CPF'
          />
        </Forms>

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

          <Button
            height={50}
            text='Criar Minha Conta'
            colors={['#12947F','#0AB599']}
          />

        </Footer>


      <Page>
        <Points>
          <Feather name='square' size={10} color='#F17808' />
          <Feather name='square' size={10} color='#F17808' />
          <Feather name='square' size={10} color='#F17808' />
        </Points>
      </Page>

      </Container>
    </ScrollView>
  )
}
