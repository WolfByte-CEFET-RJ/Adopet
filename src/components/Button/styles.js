import styled from 'styled-components/native';

export const BtCreate = styled.TouchableOpacity`
  border-radius: ${props => `${props.radius ? props.radius : 5}px`};

  justify-content: center;
  align-items: center;

  height: ${props => `${props.height ? props.height : 50}px`};
  width: ${props => `${props.width ? props.width : 300}px`};

  elevation: 20;
`
// Prestar atenção no Elevation

export const BtCreateText = styled.Text`
  font-size: 15px;
  color: #FFF;
`