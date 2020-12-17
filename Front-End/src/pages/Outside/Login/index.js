import React, { useState } from 'react';
import { Text } from 'react-native';

import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import BG from '../../../assets/images/Login/BG.png';
import Icone from '../../../assets/images/Login/Icone.png';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import Info from '../../../components/Info';
import ForgetPassword from '../../../components/ForgetPassword';

import {
  Back,
  Background,
  Container,
  Forms,
  Icon,
  Line,
  Recup,
  Switch,
} from './styles';

export default function Login(){

  const [modalVisible, setModalvisible] = useState(false);
  const [keepConnect, setKeepConnect] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function goToMainTab(){
    // navigation.reset({
    //   routes:[{name:'MainTab'}]
    // })
    navigation.navigate('MainTab')
  }

  async function handleLogin() {
    const data = {
      email,
      password,
    }

    let isEmpty = 0;
    Object.values(data).map(item => {
      if (item == '') {
        isEmpty = 1;
      }
    })

    if (isEmpty) {
      alert('Por favor, preencha todos os campos.');
      return
    }

    try {
      const response = await api.post('/api/user/login', data)

      await AsyncStorage.setItem('token', response.data.token)
      await AsyncStorage.setItem('id', response.data.id)

      goToMainTab();

    } catch (err) {
      alert(err.response.data)
      console.log(err.response.status)
      console.log(err.response.data)
    }
  }

  return (
    <Background source={BG}>

      <Back>
        <Feather
          name='chevron-left'
          size={30}
          color='#A1A1A1'
          onPress={() => {navigation.goBack()}}
        />
      </Back>

      <Container>

        <Icon source={Icone}/>

        <Forms>
          <Info
            image='user'
            placeholder='Digite seu E-mail'
            onChangeText={email => setEmail(email)}
            defaultValue={email}
            length={40}
            color='#12947F'
          />

          <Info
            image='lock'
            placeholder='Digite sua Senha'
            onChangeText={password => setPassword(password)}
            defaultValue={password}
            password={true}
            length={15}
            color='#12947F'
          />
        </Forms>

        <Line>
          <Switch
            valeu={true}
            onValueChange={keepConnect => setKeepConnect(keepConnect)}
            value={keepConnect}
          />
          <Text>  Manter Conectado   |   </Text>
          <Recup onPress={() => {setModalvisible(true)}}>Esqueceu sua Senha?</Recup>
        </Line>

        <Button
        onPress={handleLogin}
        text='Entrar'
        colors={['#F17808','#FF8A00']}
        radius={10}
        />

      </Container>

      <ForgetPassword
        visible={modalVisible}
        fechar={() => {setModalvisible(false)}}
      />

    </Background>
  )
}
