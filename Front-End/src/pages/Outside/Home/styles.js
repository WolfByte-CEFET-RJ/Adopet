import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${Constants.statusBarHeight + 280}px;
`;

export const TextInicial = styled.View`
  margin: 0px 50px 40px 0px;
`;

export const Buttons = styled.View`
  justify-content: space-between;
  height: 124px;
`;