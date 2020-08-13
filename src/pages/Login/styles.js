import styled from 'styled-components/native';

export const Background= styled.SafeAreaView`
  flex: 1;
  background-color: #ffff;
`;

export const Container= styled.KeyboardAvoidingView`
  flex:1;

`;

export const Header = styled.View`
  margin-left: 16;
`;

export const HeaderTitle = styled.Text`
  font-size: 24;
  color: #1B262C;
  margin-bottom: 10;
`;

export const Person = styled.View`
  flex-direction: row;
  font-size: 12;
`;

export const PersonText = styled.Text`
  color: #F17808;

`;

export const BG= styled.Image`

`;

export const AreaInput= styled.View`
margin-bottom: 10;
flex-direction: row;
`;

export const Input= styled.TextInput`
margin-bottom: 10;
background: #F17808;
`;

export const BtCreate = styled.TouchableOpacity`
  border-radius: 5;

  justify-content: center;
  align-items: center;

  height: 50;
`
export const BtCreateText = styled.Text`
  font-size: 15;
  color: #FFF;
`








