import React,{useState} from 'react';

import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import ColarAfter from '../../assets/images/ColarAfter.png';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';
// import { useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';

import {
  AdopetTitle,
  Background,
  Button1,
  Description,
  Icon,
  ImagePatas,
} from './styles';

const fetchFonts = () => {
    return Font.loadAsync({
      'GilroyBold':require('../../assets/fonts/Gilroy-Bold.ttf'),
    });
  };


export default function AfterCreate2() {
      const [dataLoaded, setDataLoaded] = useState(false);
      if (!dataLoaded){
      return(
         <AppLoading
            startAsync = {fetchFonts}
            onFinish = {()=> setDataLoaded(true)}
          />
       );
      }
      // const navigation= useNavigation();
      // function IrparaLogin(){
      //   navigation.navigate('Login');
      // }
      // function IrparaRegistro(){
      //   navigation.navigate('Registro')
      // }

  return (
    <Background>

      <ImagePatas source={PatasTransparentes}/>

      <AdopetTitle style={{fontFamily:'GilroyBold'}}>Chegou sua Hora!
      </AdopetTitle>

      <Description>Agora, você já pode usar nosso{"\n"}querido aplicativo. Adote e coloque {"\n"}para adoção!!</Description>

      <Icon source={ColarAfter}/>


      <Button1>
        <Button
        height={50}
        width={300}
        text='Vamos lá!'
        colors={['#F17808','#FF8A00']}
        />
      </Button1>

    </Background>
  );
}