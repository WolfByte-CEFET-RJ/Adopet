import styled from 'styled-components/native';

export const UserScroll = styled.ScrollView`
  flex: 1;

  width: 100%;
  height: 100%;

  flex-direction: row;
`;

export const UserBt = styled.TouchableOpacity`
  width: 80px;
  height: 80px;

  border-radius: 40px;

  justify-content: center;
  align-items: center;

  margin: 0 10px;
`;

export const User = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 40px;

  margin-right: 15px;
`;
