import React,{useState} from 'react';
import { Image, Text, View, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import GatoHome from '../../assets/images/GatoHome.png';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
// import { useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Background,
  ImagePatas,
  ImageGato,
  Header,
  AdopetTitle,
  Description,

} from './styles';

const fetchFonts = () => {
    return Font.loadAsync({
      'GilroyLight': require('../../assets/fonts/Gilroy-Light.ttf'),
      'GilroyBold':require('../../assets/fonts/Gilroy-Bold.ttf'),
      'CircularStdBook': require('../../assets/fonts/Circular-Std-Book.ttf'),
      'CircularStdMedium': require('../../assets/fonts/Circular-Std-Medium.ttf'),
    });
  };


export default function Inicial() {
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
      <ImageGato source={GatoHome}/>

      <Header style={{fontFamily:'GilroyLight'}}>Bem-Vindo ao</Header>
      <AdopetTitle style={{fontFamily:'GilroyLight'}}>Adopet</AdopetTitle>

      <Description>O aplicativo feito para facilitar{"\n"}a sua busca por um animal para adotar{"\n"}ou uma pessoa para adotar seu animal.{"\n"}{"\n"}Aproveite!</Description>

      <TouchableOpacity style={{position:'absolute',shadowColor: '#000000',shadowOpacity: 0.25,shadowOffset: {width:4 ,height:4},elevation:10,left:'8.06%',top:'68.59%',width:'83.88%',height:'6.16%',borderRadius:10,alignItems:'center'}}>
      <LinearGradient start={{x:0.3,y:0}} end={{x:2,y:0}}colors={['#F17808','#FFFFFF']} style={{width:'100%',height:'100%',borderRadius:10}}></LinearGradient>
      <Text style={{position:'absolute',top:'25%',fontFamily:'CircularStdMedium',color:'#FFFFFF',fontSize:18}}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{position:'absolute',shadowColor: '#000000',shadowOpacity: 0.25,shadowOffset:{width:4 ,height:4},elevation:10,left:'8.06%',top:'77.97%',width:'83.88%',height:'6.16%',borderRadius:10,alignItems:'center',backgroundColor:'#12947F'}}>
      <Text style={{position:'absolute',top:'25%',fontFamily:'CircularStdMedium',color:'#FFFFFF',fontSize:18}}>Login</Text>
      </TouchableOpacity>

    </Background>
  );
}