import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;

  align-items: center;

  margin-top: ${Constants.statusBarHeight + 40}px;
`;

export const Exit = styled(Feather)`
  position: absolute;
  top: -10px;
  left: 10px;
`

export const AboutArea = styled.View`
  width: 100%;
  padding: 0 10px;

  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: white;

  font-weight: bold;
  margin-bottom: 10px;
`;

export const Title2 = styled(Title)`
  padding-left: 10px;
`;

export const About = styled.Text`
  color: #1B262C;
  font-size: 16px;
`;

export const Pets = styled.View`
  width: 100%;

  margin-bottom: 20px;
`;

export const PetArea = styled.View`
  margin-right: 15px;
  margin-left: 10px;
`