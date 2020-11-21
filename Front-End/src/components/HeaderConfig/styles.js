import styled from 'styled-components';

export const Header = styled.TouchableOpacity`
  background: white;

  width: 60%;
  height: 105px;

  justify-content: center;
  align-items: center;

  flex-direction: row;

  border-bottom-right-radius: 50px;
`

export const UserImage = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  margin-right: 10px;
`

export const UserInfo = styled.View`
`
export const UserName = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`
export const UserCity = styled.Text`
  color: black;
  font-size: 12px;
`