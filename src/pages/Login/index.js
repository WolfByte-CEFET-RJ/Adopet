import React, { useState } from 'react';
import { Text } from 'react-native';

import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import LoginBG from '../../assets/images/LoginBG.png';
import Icone from '../../assets/images/Icone.png';

import { Feather } from '@expo/vector-icons';

import Button from '../../components/Button';
import Info from '../../components/Info';

import {
  BGPata,
  BGLogin,
  Container,
  Forms,
  Icon,
  Recup,
  Button1,
} from './styles';

export default function Login(){
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return(
      <Container>

        <Feather
          name='chevron-left'
          size={26}
          color='#A1A1A1'
        />

        <BGPata source={PatasTransparentes}/>
        <BGLogin source={LoginBG}/>

        <Text>{userName}</Text>
        <Text>{password}</Text>

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

        <Recup onPress={() => {}}>Esqueceu sua Senha?</Recup>

        <Button1>
          <Button
          height={40}
          width={300}
          text='Entrar'
          colors={['#F17808','#FF8A00']}
          />
        </Button1>


      </Container>
  )
}
