import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Tag = styled.TouchableOpacity`
  background: ${props => props.background};

  height: 35px;

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

export const Paw = styled(FontAwesome)`
  position: absolute;
  right: -10px;
  top: -2px;

  transform: rotate(25deg);

  z-index: 10;
`