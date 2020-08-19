import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import BG from '../../assets/images/BGOrange.png';

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
  Green,
  Page,
  Person,
  ONGText,
  PlaceImage,
  PlaceImageOpacity,
  Points
} from './styles';


export default function CreateAccountPerson() {
  const [check1Select, setCheck1Select] = useState(false);
  const [check2Select, setCheck2Select] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail]       = useState('');
  const [CNPJ, setCNPJ]         = useState('');
  const [local, setLocal]       = useState('');

  return (
    <ScrollView>
      <Container>
        <BackGround source={BG} />

        <Text>{userName}</Text>
        <Text>{password}</Text>
        <Text>{email}</Text>
        <Text>{CNPJ}</Text>
        <Text>{local}</Text>

        <Feather
          name='chevron-left'
          size={26}
          color='#A1A1A1'
        />

        <Header>
          <HeaderTitle>Crie sua conta{'\n'}no Adopet</HeaderTitle>
          <Person>
            <Text>Este cadastro se refere a </Text>
            <ONGText>Ongs</ONGText>
          </Person>
        </Header>

        <PlaceImage>
          <PlaceImageOpacity
            onPress={() => {}}
          >
            <Feather name='camera' color='#12947F' size={30}/>
          </PlaceImageOpacity>
        </PlaceImage>

        <Forms>
          <Info
            image='user'
            placeholder='Digite seu nome'
            onChangeText={userName => setUserName(userName)}
            defaultValue={userName}
            length={40}
            color='#12947F'
          />
          <Info
            image='mail'
            placeholder='Digite seu E-mail'
            onChangeText={email => setEmail(email)}
            defaultValue={email}
            length={40}
            color='#12947F'
          />
          <Info
            image='lock'
            placeholder='Digite sua senha'
            onChangeText={password => setPassword(password)}
            defaultValue={password}
            password={1}
            length={15}
            color='#12947F'
          />
          <Info
            image='users'
            placeholder='Digite seu CNPJ da Ong'
            onChangeText={CNPJ => setCNPJ(CNPJ)}
            defaultValue={CNPJ}
            length={40}
            color='#12947F'
          />
          <Info
            image='map-pin'
            placeholder='Digite o local da Ong'
            onChangeText={local => setLocal(local)}
            defaultValue={local}
            length={40}
            color='#12947F'
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
                    <Green
                      onPress={() => {}}
                    >Termos</Green>
                    <Text> e </Text>
                    <Green
                      onPress={() => {}}
                    >Política de Dados.</Green>
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
            colors={['#F17808','#FF8A00']}
          />

        </Footer>


      <Page>
        <Points>
          <Feather name='square' size={10} color='#12947F' />
          <Feather name='square' size={10} color='#12947F' />
          <Feather name='square' size={10} color='#12947F' />
        </Points>
      </Page>

      </Container>
    </ScrollView>
  )
}
