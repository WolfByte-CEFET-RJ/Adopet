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

export const PetArea = styled.View`
  margin: 5px;
  position: relative;
  top: ${props => `${!(props.index % 2) ? 30 : 0 }px`};
`;

export const Body = styled.FlatList`
`
