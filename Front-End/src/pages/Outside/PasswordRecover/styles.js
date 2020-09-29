import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background= styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  background: #12947F;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.Text`
  margin-top:  ${Constants.statusBarHeight + 10}px;
  color: #FFF;
  font-size: 28px;
`;

export const Subtitle = styled.Text`
  color: #FFF;
  font-size: 48px;
  font-weight: bold;

  padding-bottom: 10px;
  margin-top: -10px;
`;

export const Icon= styled.Image`
  width: 217px;
  height: 217px;
  margin: 40px 0px 10px 0px;
`;

export const BodyText = styled.Text`
  color: #292929;
  margin: 20px;

  font-size: 17px;
  text-align: center;
`;

export const Forms = styled.View`
  margin-bottom: 25px;
  padding: 0 20px;
`;