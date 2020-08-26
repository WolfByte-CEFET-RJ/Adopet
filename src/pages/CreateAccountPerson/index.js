import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import BG from '../../assets/images/BG.png';

import {
  CheckBox,
  ScrollView,
  Text,
  View,
} from 'react-native';

import Button from '../../components/Button';
import Info from '../../components/Info';
import ThreePoints from '../../components/ThreePoints'

import {
  BackGround,
  CheckBoxContainer,
  CheckBoxText,
  CheckBoxes,
  Container,
  Footer,
  Forms,
  Green,
  Header,
  HeaderTitle,
  Orange,
  Person,
  PlaceImage,
  PlaceImageOpacity,
} from './styles';


export default function CreateAccountPerson() {
  const [check1Select, setCheck1Select] = useState(false);
  const [check2Select, setCheck2Select] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email   ,    setEmail] = useState('');
  const [CPF     ,      setCPF] = useState('');

  const navigation = useNavigation();

  return (
    <ScrollView>
      <BackGround source={BG}>
        <Container>

          <Feather
            name='chevron-left'
            size={26}
            color='#A1A1A1'
            onPress={() => {navigation.goBack()}}
          />

          <Header>
            <HeaderTitle>Crie sua conta{'\n'}no Adopet</HeaderTitle>
            <Person>
              <Text>Este cadastro se refere à <Green>Pessoa Física</Green></Text>
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
              onChangeText={userName => setUserName(userName)}
              defaultValue={userName}
              length={30}
              color='#F17808'
            />
            <Info
              image='mail'
              placeholder='Digite seu E-mail'
              onChangeText={email => setEmail(email)}
              defaultValue={email}
              length={30}
              color='#F17808'
            />
            <Info
              image='lock'
              placeholder='Digite sua senha'
              onChangeText={password => setPassword(password)}
              defaultValue={password}
              password={1}
              length={15}
              color='#F17808'
            />
            <Info
              image='users'
              placeholder='Digite seu CPF'
              onChangeText={CPF => setCPF(CPF)}
              defaultValue={CPF}
              length={30}
              color='#F17808'
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
                      <Orange
                        onPress={() => {}}
                      >Termos</Orange>
                      <Text> e </Text>
                      <Orange
                        onPress={() => {}}
                      >Política de Dados.</Orange>
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
              onPress={() => {navigation.navigate('CreateAccountONG')}}
            />

          </Footer>

        <ThreePoints
          points={[1,0,0]}
          color={'#12947F'}
        />

        </Container>
      </BackGround>
    </ScrollView>
  )
}
