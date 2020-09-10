import styled from 'styled-components/native';

export const Page = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const Points = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;

  width: 50px;
  height: 15px;

  flex-direction: row;
  justify-content: space-around;

  align-items: center;
`

export const Point = styled.TouchableOpacity`
  background: ${props => props.background};

  width: 10px;
  height: 10px;

  border-radius: 2px;
`