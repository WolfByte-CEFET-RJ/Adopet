import styled from 'styled-components';

export const Type = styled.TouchableOpacity`
  height: 80px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background: ${props => props.background};

  elevation: 10;
`
