import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Button from '../Button';
import Info from '../Info';

export default function Modal2(props){
  return(
    <View style={{backgroundColor: '#292929', width:'100%', height: 300, borderRadius: 15}}>
        <Text style={{padding: 15, color: '#FFF', fontSize: 28, textAlign: 'center'}}>Seja Bem-vindo!</Text>
        <View style={{backgroundColor: '#FFF', width:'100%', height: 280, borderBottomLeftRadius: 30, borderBottomRightRadius: 30,}}>
            <Text style={{padding: 15, color: '#292929', fontSize: 14, textAlign: 'center'}}>Insira o seu E-mail no campo {'\n'} abaixo para receber uma nova {'\n'} senha e as instruções para poder {'\n'} trocar!</Text>

            <Info
              image='mail'
              placeholder='Digite seu E-mail'
              onChangeText={ () => ''}
              length={30}
              color='#F17808'
            />

            <Button
              onPress={props.fechar}
              text='Enviar'
              colors={['#12947F','#0AB599']}
            />

        </View>
    </View>
  );
}