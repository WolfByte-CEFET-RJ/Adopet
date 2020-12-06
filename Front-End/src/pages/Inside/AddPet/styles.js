import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background= styled.ImageBackground`
  flex: 1;
`;

export const Container= styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Back= styled.View`
  position: absolute;
  top: 35px;
  left: 10px;

  z-index: 10;
`;

export const HeaderIcon= styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Icon= styled.Image`
  margin-bottom: 8%;
`;

export const TextInicial= styled.View`
  justify-content: center;
  margin: 0px 30px 100px 30px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 5%;
  width: 100%;
`;

export const AddButton = styled.Image`
`;

