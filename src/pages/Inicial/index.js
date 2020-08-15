import React from 'react';
import { View,Text } from 'react-native';
import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import FotoCachorro from '../../assets/images/FotoCachorro.png';
import Button from '../../components/Button';

import {
  Background,
  BG,
  Container,
  Header,
  HeaderTitle,
  InicialText,
  Buttons
} from './styles';

export default function Inicial(){
  return(
    <Background source={PatasTransparentes}>
      <Container>
        <BG source={FotoCachorro}/>

        <Header>
          <HeaderTitle>Bem Vindo ao{'\n'}Adopet
          </HeaderTitle>
          <InicialText>
            <Text>Siga 3 passos e você ter acesso ao melhor aplicativo de adoção e doação de pets do Brasil. {'\n'}{'\n'}Aproveite.
            </Text>
          </InicialText>
        </Header>

        <Buttons>
          <Button
              height={50}
              text='Pessoa Fisica'
              colors={['#12947F','#0AB599']}
            />

          <Button
              height={50}
              text='Ong'
              colors={['#F17808','#FF8A00']}
            />
        </Buttons>

      </Container>
    </Background>
  )
}
