import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const UserButton = styled.TouchableOpacity``

export const UserAbout = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  flex-direction: row;

  padding: 10px;
`

export const UserImage = styled.Image`
  height: 60px;
  width: 60px;

  margin-right: 10px;

  border-radius: 30px;
`
export const UserTextArea = styled.View`
  flex: 1;
`

export const UserText = styled.Text`
  color: #1B262C;
  font-size: 10px;
`

export const UserName = styled(UserText)`
  font-size: 14px;
  margin-bottom: 5px;
`