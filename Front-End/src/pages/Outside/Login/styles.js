import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background= styled.ImageBackground`
  flex: 1;
`;

export const Back= styled.View`
  position: absolute;
  top: 7%;
  left: 5%;
  z-index: 10;
`;

export const Container= styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${Constants.statusBarHeight + 60}px;
`;

export const Icon= styled.Image`
  width: 204px;
  height: 217px;
`;

export const Forms = styled.View`
  margin: 30px 30px 30px 30px;
`;

export const Recup = styled.Text`
  text-decoration: underline;
`;

export const Switch= styled.Switch`
`;

export const Line= styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;