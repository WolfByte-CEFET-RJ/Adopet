import styled from 'styled-components/native';

export const TextInicial = styled.View`
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;

  color: ${props => props.color ? '#ffff' : '#1B262C'};
`

export const Strong = styled.Text`
  margin-bottom: ${props => `${props.margin ? props.margin : 20}px`};

  font-size: 38px;
  font-weight: bold;
  line-height: 47px;

  color: ${props => props.color ? '#ffff' : '#1B262C'};
`

export const Description = styled.Text`
  align-items: center;

  font-weight: 400;
  font-size: 14px;

  color: ${props => props.color ? '#ffff' : '#7B7F9E'};
`

