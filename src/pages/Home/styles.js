import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Background= styled.SafeAreaView`
  flex: 1;
  background-color: #FAFBFD;
  height:100%;
  width:100%;
`;

export const ImagePatas= styled.Image`
  position: absolute;
  top: 10%;
  height: 100%;
  width: 100%;
`;

export const ImageGato= styled.Image`
  width: 100%;
`;

export const Header= styled.Text`
  position: absolute;
  left: 8.33%;
  top: 37.19%;

  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color:#1B262C;
`;

export const AdopetTitle= styled.Text`
  position: absolute;
  left: 7.78%;
  top: 40.62%;

  font-size: 38px;
  font-weight: bold;
  line-height: 47px;
  color:#1B262C;
`;

export const Description= styled.Text`
  position: absolute;
  left: 8.83%;
  top: 47.97%;

  font-weight: 400;
  font-size: 14px;
  color:#7B7F9E;
`;

export const Button1= styled.TouchableOpacity`
  position: absolute;

  left: 8.06%;
  top: 68.59%;
  width: 83.88%;
  border-radius: 10px;

  align-Items: center;

`

export const Button2= styled.TouchableOpacity`
  position: absolute;

  left: 8.06%;
  top: 77.97%;
  width: 83.88%;
  border-radius: 10px;

  align-Items: center;

`
