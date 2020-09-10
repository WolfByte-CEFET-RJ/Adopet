import styled from 'styled-components/native';

export const BtCreate = styled.TouchableOpacity`
  border-radius: ${props => `${props.radius ? props.radius : 5}px`};

  justify-content: center;
  align-items: center;

  height: ${props => `${props.height ? props.height : 50}px`};
  width: ${props => `${props.width ? props.width : 300}px`};

  box-shadow: 5px 5px 5px rgba(0,0,0,.5);
`

export const BtCreateText = styled.Text`
  font-size: 15px;
  color: #FFF;
`