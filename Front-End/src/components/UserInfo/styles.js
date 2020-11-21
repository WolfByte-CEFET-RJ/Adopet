import styled from 'styled-components';

export const Info = styled.View`
  align-items: center;
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
`;

export const TextArea = styled.View`
  align-items: center;
`

export const UserName = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const UserState = styled.Text`
  color: white;
  font-size: 16px;

  margin-bottom: 10px;
`;

export const ImageArea = styled.View`
  background: white;

  width: 205px;
  height: 205px;

  border-radius: 100px;

  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
`

export const UserImage = styled.Image`
  width: 200px;
  height: 200px;

  border-radius: 100px;
`;