import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background= styled.ImageBackground`
  flex: 1;
`;

export const Container= styled.SafeAreaView`
  flex: 1;

  margin-top: ${Constants.statusBarHeight + 10}px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
`

export const Body = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`

export const Pet = styled.TouchableOpacity`
  width: 300px;
  height: 450px;
`

export const PetImage = styled.Image`
  flex: 1;

  width: 300px;
  height: 450px;

  border-radius: 10px;
`

export const Info = styled.View`
  position: absolute;

  bottom: 10px;
  left: 10px;
`

export const PetName = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;

  margin-bottom: 5px;
`
export const PetInfo = styled(PetName)`
  font-size: 14px;
`

export const TextClick = styled.Text`
  font-size: 12px;
  color: #ffffffdd;
`