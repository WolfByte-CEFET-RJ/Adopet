import styled from 'styled-components';

export const ImageView = styled.TouchableOpacity`
  width: ${props => `${props.main ? 180 : 85}px`};
  height: ${props => `${props.main ? 180 : 85}px`};

  align-items: center;
  justify-content: center;

  margin-bottom: ${props => `${props.main ? 20 : 0}px`};

  border-radius: ${props => `${props.main ? 25 : 15}px`};

  background: #FBFAFA;

  elevation: 10;
`;

export const ImagePet = styled.Image`
  width: ${props => `${props.main ? 180 : 85}px`};
  height: ${props => `${props.main ? 180 : 85}px`};
  border-radius: ${props => `${props.main ? 25 : 15}px`};
`

export const ImageText = styled.Text`
  font-size: ${props => `${props.main ? 30 : 15}px`};
  color: #D2D0CF;

  text-align: center;
`;