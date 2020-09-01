import React, { useState } from 'react';
import { Text } from 'react-native';

import BG from '../../../assets/images/Login/BG.png';
import Icone from '../../../assets/images/Login/Icone.png';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import Info from '../../../components/Info';

import {
  Background,
  Container,
  Forms,
  Icon,
  Line,
  Recup,
  Switch,
} from './styles';

export default function Login(){

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation= useNavigation();
  function IrparaHome(){
    navigation.navigate('Home');
  }

  return (
    <Background source={BG}>

      <Container>

        <Feather
          name='chevron-left'
          size={26}
          color='#A1A1A1'
          onPress={() => {navigation.goBack()}}
        />

        <Icon source={Icone}/>

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
            image='lock'
            placeholder='Digite sua senha'
            onChangeText={password => setPassword(password)}
            defaultValue={password}
            password={1}
            length={15}
            color='#12947F'
          />
        </Forms>

        <Line>
          <Switch valeu={true} onValueChange={ () => '' } />
          <Text>Manter Conectado    |    </Text>
          <Recup onPress={() => {}}>Esqueceu sua Senha?</Recup>
        </Line>

        <Button
        onPress={() => {IrparaHome()}}
        text='Entrar'
        colors={['#F17808','#FF8A00']}
        radius={10}
        />

      </Container>

    </Background>
  )
}
