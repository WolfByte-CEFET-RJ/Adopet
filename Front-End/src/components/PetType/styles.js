import styled from 'styled-components';

export const Type = styled.TouchableOpacity`
  height: 80px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background: ${props => props.background};

  elevation: 10;
`

export const Checked = styled.View`
  position: absolute;

  height: 80px;
  width: 80px;

  background: #2B2B2B29;
`
