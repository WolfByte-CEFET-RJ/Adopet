import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;

  align-items: center;

  margin-top: ${Constants.statusBarHeight + 40}px;
`;

export const AboutArea = styled.View`
  width: 100%;
  padding: 0 10px;

  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: white;

  font-weight: bold;
  margin-bottom: 10px;
`;

export const About = styled.Text`
  color: #1B262C;
  font-size: 16px;
`;

export const Options = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-evenly;
`;
