import styled from 'styled-components/native';

export const Tag = styled.View`
  background: ${props => props.background};

  height: 25px;

  align-items: center;
  justify-content: center;

  margin-right: 15px;

  border-radius: 50px;
`

export const TagText = styled.Text`
  font-size: 16px;
  color: ${props => props.color};

  margin: 0 10px;
`