import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding-top: ${Constants.statusBarHeight + 0}px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  background: red;
  flex-direction: row;
  background: #fff;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 80%;
  height: 65px;
`;

export const Person = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileName = styled.Text`
  font-size: 26px;
  color: #000;
  margin-bottom: 8px;
`;

export const Profile = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;

export const BottomDenun = styled.TouchableOpacity`
`;

export const DenunciaImg = styled.Image`
 height: 40px;
 width: 40px;
 margin: 0 20px;
`
export const Body = styled.View`
  flex: 1;
`

export const Chat = styled.View`
`

export const MessageArea = styled.View`
  margin: 10px 0 100px 0;
`;

export const InputArea = styled.View`
  position: absolute;
  bottom: 10px;
  align-items: flex-end;
  flex-direction: row;
  background: #fff;
  border-radius: 30px;
  align-items: center;
  margin: 0 20px;
`;

export const InputText = styled.TextInput`
  margin: 20px;
  font-size: 20px;
`;

export const InputImage = styled.View`
  margin-left: 10px;
`;

export const InputButton = styled.View`
`

export const Buttom = styled.TouchableOpacity`
  background: #F38F32;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  z-index: 2;
  margin: 0 5px 0 90px;
`

export const PataImage = styled.Image`
  margin-left: 5px;
  margin-top: 5px;
  width:25px;
  height: 25px;
`