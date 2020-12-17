import styled from 'styled-components/native';


export const MessageDiv = styled.View`
  align-self: ${props => props.align};
  width: 200px;
  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  background: ${props => props.background};
  margin: 5px 15px ;
`
export const YourMessage = styled.Text`

  
  text-align: left;
  line-height: 40px;
  font-size: 20px;

  color: #FFF;

`
export const Div = styled.View`

`
export const Time  = styled.Text`
  flex: 1;
  flex-direction: column;
  align-self: ${props => props.timeAlign};
  margin: 0 20px 0 25px;
  font-size: 15px;
  color: #4B5860;
  font-weight: 500;
  
`;
