import styled from 'styled-components';

export const SearchArea = styled.View`
  width: ${props => props.little ? '150px' : '100%'};
  height: ${props => props.little ? '40px' : '50px'};

  flex-direction: ${props => props.little ? 'row-reverse' : 'row'};
  align-items: center;

  border-radius: ${props => props.little ? '15px' : '10px'};;
  background: ${props => props.little ? '#52B0A1' : '#E5E4E5'};

  elevation: 5;

  margin-top: 10px;
  margin-bottom: 10px;

  padding: 0 10px;
`

export const SearchName = styled.TextInput`
  flex: 1;
  color: ${props => props.little ? 'white' : 'black'};
  font-size: 16px;
  margin-left: ${props => props.little ? '5px' : '0'};
`