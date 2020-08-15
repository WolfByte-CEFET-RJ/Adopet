import React from 'react';
import { View,Text } from 'react-native';
import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import LoginBG from '../../assets/images/LoginBG.png';
import Button from '../../components/Button';

import {
  AreaInput,
  BGPata,
  BGLogin,
  Container,
  Header,
  HeaderTitle,
  Input,
  Person,
  PersonText,
} from './styles';

export default function Login(){
  return(
      <Container>
        <BGPata source={PatasTransparentes}/>
        <BGLogin source={LoginBG}/>

        <Header>
          <HeaderTitle>Bem Vindo,{'\n'}ao Adopet</HeaderTitle>
          <Person>
          <Text> Você não possui Conta? </Text>
            <PersonText>Cria sua Conta</PersonText>
          </Person>
        </Header>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorret={false}
          autoCapitalize="none"
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorret={false}
          autoCapitalize="none"
          />
        </AreaInput>

        <Button
              height={50}
              text='Ong'
              colors={['#F17808','#FF8A00']}
        />

      </Container>
  )
}
