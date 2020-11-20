import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`

export const Title = styled.Text`
  font-size: 18px;
  color: #E9E9E9;
`

export const SearchArea = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background: #E5E4E5;

  elevation: 5;

  margin-top: 10px;
  margin-bottom: 10px;

  padding: 0 10px;
`

export const SearchName = styled.TextInput`
  flex: 1;
  font-size: 18px;
`

export const PetArea = styled.View`
  margin: 5px;
  position: relative;
  top: ${props => `${!(props.index % 2) ? 30 : 0 }px`};
`;
