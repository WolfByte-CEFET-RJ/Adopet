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

export const UserInfo = styled.View`
  align-items: center;
`;

export const UserName = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const UserState = styled.Text`
  color: white;
  font-size: 16px;

  margin-bottom: 10px;
`;

export const ImageArea = styled.View`
  background: white;

  width: 205px;
  height: 205px;

  border-radius: 100px;

  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
`

export const UserImage = styled.Image`
  width: 200px;
  height: 200px;

  border-radius: 100px;
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
