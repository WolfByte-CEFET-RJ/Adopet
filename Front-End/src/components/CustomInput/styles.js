import styled from 'styled-components/native';

export const InputView = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background: #E5E4E5;

  elevation: 5;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: ${props => `${props.left ? 20 : 0}px`};
`

export const InputText = styled.TextInput`
  flex: 1;
  padding: 10px 10px;

  font-size: 18px;
`
